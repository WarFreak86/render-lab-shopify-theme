(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [636], {
        92: (t, e, r) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(71742)
            }])
        },
        2064: (t, e, r) => {
            "use strict";
            r.d(e, {
                o: () => s
            });
            var i, s = ((i = {}).MEDIUM = "medium", i.LARGE = "large", i.XLARGE = "xlarge", i)
        },
        2994: (t, e, r) => {
            "use strict";
            r.d(e, {
                Q: () => s
            });
            var i, s = ((i = {}).REGISTERED = "REGISTERED", i.CUSTOMER = "CUSTOMER", i.B2B = "B2B", i.DC_USER = "DC_USER", i.SHOP = "SHOP", i.BRANDSHOP = "BRANDSHOP", i)
        },
        3540: (t, e, r) => {
            "use strict";
            var i, s, o;
            r.d(e, {
                E: () => i
            }), (o = (s = i || (i = {})).redirect || (s.redirect = {})).PAY_SUCCESS = "pay-success", o.DC_SUCCESS = "dc-success"
        },
        3806: (t, e, r) => {
            "use strict";
            r.d(e, {
                D: () => i
            });
            let i = {
                BASE: "http://localhost:8123",
                VERSION: "1.0",
                WITH_CREDENTIALS: !1,
                CREDENTIALS: "include",
                TOKEN: void 0,
                USERNAME: void 0,
                PASSWORD: void 0,
                HEADERS: void 0,
                ENCODE_PATH: void 0
            }
        },
        8341: (t, e, r) => {
            "use strict";
            r.d(e, {
                $: () => o
            });
            var i = r(3806),
                s = r(26986);
            class o {
                static getForYouPosters(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/for-you/v1/feed",
                        query: {
                            au: t,
                            quiz: o,
                            page: e,
                            limit: r
                        }
                    })
                }
                static saveInterestsV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/for-you/v1/interests",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getAccessories() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/accessories"
                    })
                }
                static getAccessoriesCartItemsExcluded() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/accessories/cart-items/excluded"
                    })
                }
                static getShareAndEarnCode() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/artist/share-and-earn/code"
                    })
                }
                static checkSession() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/auth/check"
                    })
                }
                static loginFailed() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/auth/login-failed"
                    })
                }
                static logout(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/auth/logout",
                        query: {
                            redirect_uri: t
                        }
                    })
                }
                static getBundleUserShopDataV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/bundle/{bundleSku}",
                        path: {
                            bundleSku: t
                        }
                    })
                }
                static getCheckoutProvidersV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/checkout/providers",
                        query: {
                            context: t
                        },
                        errors: {
                            400: "Bad request - invalid or missing context parameter"
                        }
                    })
                }
                static getCheckoutSummaryV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/checkout/summary",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static applyGiftCardV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/checkout:applyGiftCard",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            400: "Bad request - gift card could not be applied"
                        }
                    })
                }
                static getCustomDisplateUploaderStatus() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/uploader"
                    })
                }
                static getCustomDisplateUploaderFilters() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/uploader/filter"
                    })
                }
                static initCustomDisplateUpload(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom-displate/uploader/init",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getCustomDisplatePdpDataForUserBySku(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{sku}",
                        path: {
                            sku: t
                        },
                        query: {
                            countryCode: e,
                            uvert: r
                        }
                    })
                }
                static getCustomDisplateGeneralRenderDetails(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{sku}/render-details",
                        path: {
                            sku: t
                        },
                        query: {
                            countryCode: e
                        }
                    })
                }
                static initCustomDisplateAnalysis(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/analysis",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static getCustomDisplateFilterResult(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/filter/{processId}",
                        path: {
                            uploadId: t,
                            processId: e
                        }
                    })
                }
                static getCustomDisplateFilterStatus(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/filter/{processId}/status",
                        path: {
                            uploadId: t,
                            processId: e
                        }
                    })
                }
                static acceptAndUpscaleCustomDisplateFilterResult(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/filter/{processId}/{slug}",
                        path: {
                            uploadId: t,
                            processId: e,
                            slug: r
                        }
                    })
                }
                static initCustomDisplateFilters(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/filter:init",
                        path: {
                            uploadId: t
                        },
                        query: {
                            abVariant: r
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static initCustomDisplateUpscale(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/upscale",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static getCustomDisplateUpscaleStatus(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/upscale-status",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static acceptCustomDisplateUpscaled(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/upscale:accept",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static downloadCustomDisplateUpscaled(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/upscale:download",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static getCustomDisplateValidation(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/custom-displate/{uploadId}/validate",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static createUserCustomCollection(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/custom/collections",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            409: "Collection already exist"
                        }
                    })
                }
                static addArtworkToUserCustomCollection(t, e) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/custom/collections/{collectionId}",
                        path: {
                            collectionId: t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            409: "Item is already added to collection"
                        }
                    })
                }
                static getDisplateClubUserOfferDataV1(t = 3) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/displate-club:calculatePrice",
                        query: {
                            limit: t
                        }
                    })
                }
                static getFeatureFlagUserId(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/feature-flags/user-id/{userId}",
                        path: {
                            userId: t
                        }
                    })
                }
                static getFollowedAuthors() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/followed-authors"
                    })
                }
                static followAuthor(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/follows/{authorId}",
                        path: {
                            authorId: t
                        }
                    })
                }
                static unfollowAuthor(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v1/follows/{authorId}",
                        path: {
                            authorId: t
                        }
                    })
                }
                static getLimitedEditionUserData(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/limited-editions/{artworkId}",
                        path: {
                            artworkId: t
                        }
                    })
                }
                static deactivateAccountV1() {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/deactivate"
                    })
                }
                static updatePaymentMethodV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/displate-club/payment-method",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static cancelDisplateClubV1() {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/me/displate-club:cancel"
                    })
                }
                static changeEmailV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/email",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static updateNewsletterAgreementV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/newsletter-agreement",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static passwordChangeV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/password",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            400: "New password does not meet complexity requirements.",
                            401: "User is not authenticated."
                        }
                    })
                }
                static updatePersonalDataV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/personal-data",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getUserSettingsV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/me/settings"
                    })
                }
                static updateShippingAddressV1(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/me/shipping-address",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static updateTaxDataV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/me/tax-data",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getVoucherDataV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/me/voucher"
                    })
                }
                static getMerchantId(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/merchant-id/{art}",
                        path: {
                            art: t
                        }
                    })
                }
                static newsletterSubscribe(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/newsletter",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            401: "No elysium cookie in request or invalid email format"
                        }
                    })
                }
                static getFeedsV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/notfound",
                        query: {
                            au: t
                        }
                    })
                }
                static getSubscribedEvents() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/notify"
                    })
                }
                static subscribeToEvent(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/notify/{eventId}",
                        path: {
                            eventId: t
                        }
                    })
                }
                static unsubscribeFromEvent(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v1/notify/{eventId}",
                        path: {
                            eventId: t
                        }
                    })
                }
                static getOrderHistoryV1(t = 10, e = 1) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/order-history",
                        query: {
                            size: t,
                            page: e
                        },
                        errors: {
                            401: "Unauthorized - user not authenticated"
                        }
                    })
                }
                static createOrderV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/orders",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getPaymentStatusV1(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/orders/{orderId}/payment:getStatus",
                        path: {
                            orderId: t
                        },
                        headers: {
                            "Marketing-Consent": e
                        }
                    })
                }
                static createProductViewedEvent(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/pixel/conversion/product/{externalId}/viewed",
                        path: {
                            externalId: t
                        },
                        cookies: {
                            _fbp: r,
                            _fbc: o
                        },
                        headers: {
                            "Marketing-Consent": e
                        }
                    })
                }
                static calculatePrices(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/products:calculatePrices",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            400: "Invalid request format"
                        }
                    })
                }
                static getRecommendedCollectionsV1(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/recommended/collections",
                        query: {
                            au: t,
                            collectionId: e
                        }
                    })
                }
                static getFrequentlyBoughtTogetherV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/recommended/frequently-bought-together",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static takedownV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v1/takedown",
                        formData: t,
                        mediaType: "multipart/form-data"
                    })
                }
                static getTextrasFromSearch(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/textra",
                        headers: {
                            "User-Agent": e
                        },
                        query: {
                            au: t
                        }
                    })
                }
                static getVisualSearchResultV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/visual-search/{internalId}",
                        path: {
                            internalId: t
                        }
                    })
                }
                static getWishlistItems(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v1/wishlist",
                        query: {
                            offset: t,
                            limit: e
                        },
                        errors: {
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static wishlistAddSingleItem(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v1/wishlist",
                        cookies: {
                            _fbp: r,
                            _fbc: o
                        },
                        headers: {
                            "Marketing-Consent": t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Item not added to wishlist",
                            401: "No elysium cookie in request",
                            419: "Session has expired"
                        }
                    })
                }
                static wishlistRemoveSingleItem(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v1/wishlist/{itemCollectionId}",
                        path: {
                            itemCollectionId: t
                        },
                        errors: {
                            400: "Item not found in wishlist",
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static getCheckoutDeliveryV2() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/checkout/delivery"
                    })
                }
                static getCheckoutSummaryV2(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v2/checkout/summary",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getCollectorProductPageFeedsV2(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/collectors/product/{sku}/feed",
                        path: {
                            sku: t
                        },
                        query: {
                            au: e,
                            categoryId: r
                        }
                    })
                }
                static getCustomDisplatePdpDataForUser(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/custom-displate",
                        query: {
                            countryCode: t,
                            uvert: e
                        }
                    })
                }
                static createCustomDisplate(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v2/custom-displate/{uploadId}",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static getCustomDisplateValidationV2(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/custom-displate/{uploadId}/validate",
                        path: {
                            uploadId: t
                        }
                    })
                }
                static getDisplateClubUserOfferDataV2(t = 3, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/displate-club:calculatePrice",
                        query: {
                            limit: t,
                            purchasable: e,
                            sortPrice: r
                        }
                    })
                }
                static getFollowedArtworksV2(t, e = 54) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/follows",
                        query: {
                            offset: t,
                            limit: e
                        }
                    })
                }
                static getSubscribedEvents1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/notify"
                    })
                }
                static createOrderV2(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v2/orders",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getWishlistV2(t = 1, e = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v2/wishlist",
                        query: {
                            page: t,
                            limit: e
                        }
                    })
                }
                static addToWishlist(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v2/wishlist",
                        cookies: {
                            _fbp: r,
                            _fbc: o
                        },
                        headers: {
                            "Marketing-Consent": t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Item not added to wishlist",
                            401: "No elysium cookie in request",
                            403: "No wishlist id"
                        }
                    })
                }
                static removeFromWishlist(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v2/wishlist/{sku}",
                        path: {
                            sku: t
                        },
                        errors: {
                            400: "Item not found in wishlist",
                            401: "No elysium cookie in request",
                            403: "No wishlist id"
                        }
                    })
                }
                static getGeneralCustomDisplatePdpDataForUserV3(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate",
                        headers: {
                            "Visitor-Id": e
                        },
                        query: {
                            countryCode: t,
                            uvert: r
                        }
                    })
                }
                static getCustomDisplateUploaderStatusV3(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate/uploader",
                        headers: {
                            "Visitor-Id": t
                        }
                    })
                }
                static initCustomDisplateUploadV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/custom-displate/uploader/init",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static getCustomDisplatePdpDataForUserV3(t, e, r, o = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate/{id}",
                        path: {
                            id: t
                        },
                        headers: {
                            "Visitor-Id": r
                        },
                        query: {
                            countryCode: e,
                            uvert: o
                        }
                    })
                }
                static createCustomDisplateV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static initCustomDisplateAnalysisV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/analysis",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static initCustomDisplateUpscaleV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/upscale",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static getCustomDisplateUpscaleStatusV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/upscale-status",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static acceptCustomDisplateUpscaledV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/upscale:accept",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static downloadCustomDisplateUpscaledV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/upscale:download",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static getCustomDisplateValidationV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/custom-displate/{uploadId}/validate",
                        path: {
                            uploadId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        }
                    })
                }
                static getDisplateClubUserOfferDataV3(t, e = 3, r, o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/displate-club:calculatePrice",
                        headers: {
                            "Visitor-Id": t
                        },
                        query: {
                            limit: e,
                            purchasable: r,
                            sortPrice: o
                        }
                    })
                }
                static getDisplatePdpExperimentalFeedsV3(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/displate-pdp/{internalId}/experimental/feed",
                        path: {
                            internalId: t
                        },
                        query: {
                            au: e,
                            et: r,
                            categoryId: o
                        }
                    })
                }
                static getDisplatePdpFeedsV3(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/displate-pdp/{internalId}/feed",
                        path: {
                            internalId: t
                        },
                        query: {
                            au: e,
                            categoryId: r
                        }
                    })
                }
                static createOrderV3(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/orders",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static provideAdditionalPaymentDetailsV3(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v3/payments/additional-details",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getSessionV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v3/session",
                        query: {
                            ctrc: t,
                            ancestorOri: e
                        }
                    })
                }
                static addToWishlistV3(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v3/wishlist",
                        cookies: {
                            _fbp: r,
                            _fbc: o
                        },
                        headers: {
                            "Marketing-Consent": t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Item not added to wishlist",
                            401: "No elysium cookie in request",
                            403: "No wishlist id"
                        }
                    })
                }
                static getCheckoutDeliveryV4(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/checkout/delivery",
                        headers: {
                            "Visitor-Id": t
                        }
                    })
                }
                static getCheckoutProvidersV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/checkout/providers",
                        headers: {
                            "Visitor-Id": e
                        },
                        query: {
                            context: t
                        },
                        errors: {
                            400: "Bad request - invalid or missing context parameter"
                        }
                    })
                }
                static getCheckoutSummaryV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/checkout/summary",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static applyGiftCardV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/checkout:applyGiftCard",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Bad request - gift card could not be applied"
                        }
                    })
                }
                static getCollectorCollectedArtworksV4(t, e, r = 1, o = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/collected-artworks",
                        query: {
                            sort: t,
                            visibility: e,
                            page: r,
                            limit: o
                        }
                    })
                }
                static updateCollectorCollectedArtworkPinV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/collected-artworks/{sku}/pin",
                        path: {
                            sku: t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static updateCollectorCollectedArtworkVisibilityV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/collected-artworks/{sku}/visibility",
                        path: {
                            sku: t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static getCollectorGalleryImagesV4() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/gallery-images"
                    })
                }
                static createPreSignedUploadCollectorGalleryImageV4() {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/collectors/gallery-images"
                    })
                }
                static deleteCollectorGalleryImageV4(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v4/collectors/gallery-images/{galleryImageIdentity}",
                        path: {
                            galleryImageIdentity: t
                        }
                    })
                }
                static getCollectorProfileV4() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/profile"
                    })
                }
                static updateCollectorProfileV4(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/profile",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static uploadCollectorAvatarImageV4(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/profile/avatar",
                        formData: t,
                        mediaType: "multipart/form-data"
                    })
                }
                static createPreSignedUploadCollectorAvatarImageV4() {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/collectors/profile/avatar"
                    })
                }
                static updateCollectorProfileConsentV4(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/profile/consent",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static uploadCollectorHeaderImageV4(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/profile/header",
                        formData: t,
                        mediaType: "multipart/form-data"
                    })
                }
                static createPreSignedUploadCollectorHeaderImageV4() {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/collectors/profile/header"
                    })
                }
                static getCollectorArtworkRecommendationsV4(t, e, r = 100) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/recommendations",
                        query: {
                            auid: t,
                            artworkIds: e,
                            limit: r
                        }
                    })
                }
                static getCollectorWishlistSetsV4(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets",
                        query: {
                            sku: t
                        }
                    })
                }
                static createCollectorWishlistSetV4(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static setAssignmentForWishlistSetItemV4(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets/items",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getCollectorWishlistSetV4(t, e, r, o, a, n = 1, u = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            wishlistSetIdentity: t
                        },
                        query: {
                            orientation: e,
                            status: r,
                            sort: o,
                            sortOrder: a,
                            page: n,
                            limit: u
                        }
                    })
                }
                static updateCollectorWishlistSetV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            wishlistSetIdentity: t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static deleteCollectorWishlistSetV4(t) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v4/collectors/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            wishlistSetIdentity: t
                        }
                    })
                }
                static createOrderV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/orders",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static getPaymentStatusV4(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/orders/{orderId}/payment:getStatus",
                        path: {
                            orderId: t
                        },
                        headers: {
                            "Marketing-Consent": r,
                            "Visitor-Id": e
                        }
                    })
                }
                static submitOrderWithdrawalV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/orders/{orderId}/withdrawal",
                        path: {
                            orderId: t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Invalid parameters",
                            404: "Order not found"
                        }
                    })
                }
                static getOrderWithdrawalItemsV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/orders/{orderId}/withdrawal/items",
                        path: {
                            orderId: t
                        },
                        query: {
                            email: e
                        },
                        errors: {
                            400: "Invalid parameters",
                            404: "Order not found"
                        }
                    })
                }
                static provideAdditionalPaymentDetailsV4(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v4/payments/additional-details",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json"
                    })
                }
                static getRecommendedPostersV4(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v4/recommended",
                        query: {
                            type: t,
                            au: e,
                            page: r,
                            limit: o
                        }
                    })
                }
                static getCollectorCollectedArtworksV5(t, e, r, o = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/collectors/collected-artworks",
                        query: {
                            sort: t,
                            visibility: e,
                            offset: r,
                            limit: o
                        }
                    })
                }
                static addCollectedArtworkByReferenceNumberV5(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v5/collectors/collected-artworks/by-reference-number",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static createPreSignedUploadCollectorGalleryImageV5() {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v5/collectors/gallery-images"
                    })
                }
                static validatePreSignedUploadCollectorGalleryImageV5(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v5/collectors/gallery-images/validate",
                        query: {
                            imageCore: t
                        }
                    })
                }
                static updateCollectorProfileV5(t) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v5/collectors/profile",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getCollectorWishlistSetsV5(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/collectors/wishlist-sets",
                        query: {
                            sku: t
                        }
                    })
                }
                static getCollectorWishlistSetV5(t, e, r, o, a, n, u = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/collectors/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            wishlistSetIdentity: t
                        },
                        query: {
                            orientation: e,
                            status: r,
                            sort: o,
                            sortOrder: a,
                            offset: n,
                            limit: u
                        }
                    })
                }
                static getCollectorCollectedProductV5(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/collectors/{collectorNick}/products/{sku}",
                        path: {
                            collectorNick: t,
                            sku: e
                        }
                    })
                }
                static getDisplatePdpUserDataV5(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/displate-pdp/{externalId}",
                        path: {
                            externalId: t
                        }
                    })
                }
                static getDisplatePdpInspirations(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/displate-pdp/{externalId}/inspirations/{categoryId}",
                        path: {
                            externalId: t,
                            categoryId: e
                        }
                    })
                }
                static getHeaderContentV5() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/header-content",
                        errors: {
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static getUserInfoV5(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v5/info",
                        cookies: {
                            _ath_usr_v2: t
                        },
                        errors: {
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static getHeaderContentV6(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v6/header-content",
                        headers: {
                            "Visitor-Id": t
                        },
                        errors: {
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static getHomepageFeedsV6(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v6/homepage/feed",
                        query: {
                            au: t,
                            uvert: e
                        }
                    })
                }
                static getHomepageFeedsV7(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v7/homepage/feeds",
                        query: {
                            au: t,
                            uvert: e
                        }
                    })
                }
                static getCurrentCartV8(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v8/cart",
                        headers: {
                            "Visitor-Id": t
                        },
                        errors: {
                            401: "No elysium cookie in request",
                            404: "Cart not found"
                        }
                    })
                }
                static applyDiscountInCartV8(t, e) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v8/cart/discounts",
                        headers: {
                            "Visitor-Id": t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            400: "Invalid parameters",
                            401: "No elysium cookie in request",
                            404: "Cart not found"
                        }
                    })
                }
                static removeDiscountInCartV8(t, e) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v8/cart/discounts/{discountId}",
                        path: {
                            discountId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        },
                        errors: {
                            400: "Invalid parameters",
                            401: "No elysium cookie in request",
                            404: "Cart not found"
                        }
                    })
                }
                static addPositionsToCartV8(t, e, r, o, a) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/user/v8/cart/positions",
                        cookies: {
                            _fbp: o,
                            _fbc: a
                        },
                        headers: {
                            "Visitor-Id": t,
                            "Marketing-Consent": e
                        },
                        body: r,
                        mediaType: "application/json",
                        errors: {
                            400: "Invalid parameters",
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static updatePositionInCartV8(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "PUT",
                        url: "/elysium-api/user/v8/cart/positions/{positionId}",
                        path: {
                            positionId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        },
                        body: r,
                        mediaType: "application/json",
                        errors: {
                            400: "Invalid parameters",
                            401: "No elysium cookie in request"
                        }
                    })
                }
                static deletePositionFromCartV8(t, e) {
                    return (0, s.E)(i.D, {
                        method: "DELETE",
                        url: "/elysium-api/user/v8/cart/positions/{positionId}",
                        path: {
                            positionId: t
                        },
                        headers: {
                            "Visitor-Id": e
                        },
                        errors: {
                            401: "No elysium cookie in request",
                            404: "Position not found"
                        }
                    })
                }
                static getHomepageFeedsV8(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v8/homepage/feeds",
                        query: {
                            au: t,
                            uvert: e
                        }
                    })
                }
                static getSearchResultV8(t, e, r, o, a, n, u, l, c, d, p = 80, h, m) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v8/search",
                        headers: {
                            "User-Agent": r
                        },
                        query: {
                            phrase: t,
                            category: o,
                            orientation: a,
                            artStyle: n,
                            productType: u,
                            colors: l,
                            collection: c,
                            page: d,
                            size: p,
                            sort: h,
                            au: e,
                            variant: m
                        }
                    })
                }
                static getCurrentCartV9(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v9/cart",
                        headers: {
                            "Visitor-Id": t
                        },
                        errors: {
                            401: "No elysium cookie in request",
                            404: "Cart not found"
                        }
                    })
                }
                static getSearchResultV9(t, e, r, o, a, n, u, l, c, d, p = 80, h, m, E = !1) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/v9/search",
                        headers: {
                            "User-Agent": r
                        },
                        query: {
                            phrase: t,
                            category: o,
                            orientation: a,
                            artStyle: n,
                            productType: u,
                            colors: l,
                            collection: c,
                            page: d,
                            size: p,
                            sort: h,
                            au: e,
                            variant: m,
                            isArtistSuggestion: E
                        }
                    })
                }
                static getUsersVerticalV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/verticalization/v1/verticals/{athenaUserId}",
                        path: {
                            athenaUserId: t
                        }
                    })
                }
                static getUsersVerticalV2(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/user/verticalization/v2/verticals/{athenaUserId}",
                        path: {
                            athenaUserId: t
                        },
                        cookies: {
                            "user-vertical": e
                        }
                    })
                }
            }
        },
        15573: (t, e, r) => {
            "use strict";
            r.d(e, {
                MI: () => s,
                jh: () => o,
                m6: () => i
            });
            let i = "_du_country_code",
                s = "x-dev-id",
                o = "App-Version"
        },
        26986: (t, e, r) => {
            "use strict";
            r.d(e, {
                E: () => h
            });
            let i = "x-feature-flag";
            var s = r(87050),
                o = r(38564);
            r(41177);
            var a = r(82909).hp;
            let n = t => "string" == typeof t && "" !== t,
                u = t => "object" == typeof t && "string" == typeof t.type && "function" == typeof t.stream && "function" == typeof t.arrayBuffer && "function" == typeof t.constructor && "string" == typeof t.constructor.name && /^(Blob|File)$/.test(t.constructor.name) && /^(Blob|File)$/.test(t[Symbol.toStringTag]),
                l = async (t, e) => "function" == typeof e ? e(t) : e,
                c = async (t, e) => {
                    let [r, i, s, o] = await Promise.all([l(e, t.TOKEN), l(e, t.USERNAME), l(e, t.PASSWORD), l(e, t.HEADERS)]), c = Object.entries({
                        Accept: "application/json",
                        ...o,
                        ...e.headers
                    }).filter(([t, e]) => null != e).reduce((t, [e, r]) => ({ ...t,
                        [e]: String(r)
                    }), {});
                    if (n(r) && (c.Authorization = `Bearer ${r}`), n(i) && n(s)) {
                        let t = (t => {
                            try {
                                return btoa(t)
                            } catch (e) {
                                return a.from(t).toString("base64")
                            }
                        })(`${i}:${s}`);
                        c.Authorization = `Basic ${t}`
                    }
                    return void 0 !== e.body && (e.mediaType ? c["Content-Type"] = e.mediaType : u(e.body) ? c["Content-Type"] = e.body.type || "application/octet-stream" : "string" == typeof e.body ? c["Content-Type"] = "text/plain" : e.body instanceof FormData || (c["Content-Type"] = "application/json")), new Headers(c)
                },
                d = async (t, e, r, i, s, o, a) => {
                    let n = new AbortController,
                        u = {
                            headers: o,
                            body: i ? ? s,
                            method: e.method,
                            signal: n.signal
                        };
                    return t.WITH_CREDENTIALS && (u.credentials = t.CREDENTIALS), a(() => n.abort()), await fetch(r, u)
                },
                p = async t => {
                    if (204 !== t.status) try {
                        let e = t.headers.get("Content-Type");
                        if (e) {
                            if (["application/json", "application/problem+json"].some(t => e.toLowerCase().startsWith(t))) return await t.json();
                            return await t.text()
                        }
                    } catch (t) {
                        console.error(t)
                    }
                },
                h = (t, e) => new s.kB(async (r, s, a) => {
                    try {
                        let s = ((t, e) => {
                                let r = t.ENCODE_PATH || encodeURI,
                                    i = e.url.replace("{api-version}", t.VERSION).replace(/{(.*?)}/g, (t, i) => e.path && i in e.path ? r(String(e.path[i])) : t),
                                    s = `${t.BASE}${i}`;
                                if (e.query) {
                                    var o;
                                    let t, r;
                                    return `${s}${o=e.query,t=[],r=(e,i)=>{if(null!=i)if(Array.isArray(i))i.forEach(t=>{r(e,t)});else if("object"==typeof i)Object.entries(i).forEach(([t,i])=>{r(`
                                    $ {
                                        e
                                    }[$ {
                                        t
                                    }]
                                    `,i)});else t.push(`
                                    $ {
                                        encodeURIComponent(e)
                                    } = $ {
                                        encodeURIComponent(String(i))
                                    }
                                    `)},(Object.entries(o).forEach(([t,e])=>{r(t,e)}),t.length>0)?` ? $ {
                                        t.join("&")
                                    }
                                    `:""}`
                                }
                                return s
                            })(t, e),
                            n = (t => {
                                if (void 0 !== t.body)
                                    if (t.mediaType ? .includes("/json")) return JSON.stringify(t.body);
                                    else if ("string" == typeof t.body || u(t.body) || t.body instanceof FormData) return t.body;
                                else return JSON.stringify(t.body)
                            })(e),
                            l = await c(t, e);
                        if (!a.isCancelled) {
                            let u, c, h = await d(t, e, s, n, void 0, l, a),
                                m = await p(h),
                                E = ((t, e) => {
                                    if (e) {
                                        let r = t.headers.get(e);
                                        if ("string" == typeof r) return r
                                    }
                                })(h, e.responseHeader),
                                y = (u = {}, c = !1, (h.headers.forEach((t, e) => {
                                    e.startsWith(i) && (c = !0, u[e.replace(i + "-", "")] = "true" === t)
                                }), c) ? u : void 0),
                                f = {
                                    url: s,
                                    ok: h.ok,
                                    status: h.status,
                                    statusText: h.statusText,
                                    body: E ? ? m ? ? {}
                                },
                                g = {
                                    400: "Bad Request",
                                    401: "Unauthorized",
                                    403: "Forbidden",
                                    404: "Not Found",
                                    500: "Internal Server Error",
                                    502: "Bad Gateway",
                                    503: "Service Unavailable",
                                    ...e.errors
                                }[f.status];
                            if (g) throw new o.h(e, f, g);
                            if (!f.ok) {
                                let t = f.status ? ? "unknown",
                                    r = f.statusText ? ? "unknown",
                                    i = (() => {
                                        try {
                                            return JSON.stringify(f.body, null, 2)
                                        } catch (t) {
                                            return
                                        }
                                    })();
                                throw new o.h(e, f, `Generic Error: status: ${t}; status text: ${r}; body: ${i}`)
                            }
                            r(y && "object" == typeof f.body && !Array.isArray(f.body) ? { ...f.body,
                                featureFlags: y
                            } : f.body)
                        }
                    } catch (t) {
                        s(t)
                    }
                })
        },
        38564: (t, e, r) => {
            "use strict";
            r.d(e, {
                h: () => i
            });
            class i extends Error {
                constructor(t, e, r) {
                    super(r), this.name = "ApiError", this.url = e.url, this.status = e.status, this.statusText = e.statusText, this.body = e.body, this.request = t
                }
            }
        },
        41177: (t, e, r) => {
            "use strict";
            r.d(e, {
                k: () => s
            });
            class i extends Error {
                constructor(t) {
                    super(t), this.name = "CancelError"
                }
                get isCancelled() {
                    return !0
                }
            }
            class s {#
                t;#
                e;#
                r;#
                i;#
                s;#
                o;#
                a;
                constructor(t) {
                    this.#t = !1, this.#e = !1, this.#r = !1, this.#i = [], this.#s = new Promise((e, r) => {
                        this.#o = e, this.#a = r;
                        let i = t => {
                                this.#t || this.#e || this.#r || (this.#t = !0, this.#o && this.#o(t))
                            },
                            s = t => {
                                this.#t || this.#e || this.#r || (this.#e = !0, this.#a && this.#a(t))
                            },
                            o = t => {
                                this.#t || this.#e || this.#r || this.#i.push(t)
                            };
                        return Object.defineProperty(o, "isResolved", {
                            get: () => this.#t
                        }), Object.defineProperty(o, "isRejected", {
                            get: () => this.#e
                        }), Object.defineProperty(o, "isCancelled", {
                            get: () => this.#r
                        }), t(i, s, o)
                    })
                }
                get[Symbol.toStringTag]() {
                    return "Cancellable Promise"
                }
                then(t, e) {
                    return this.#s.then(t, e)
                } catch (t) {
                    return this.#s.catch(t)
                } finally(t) {
                    return this.#s.finally(t)
                }
                cancel() {
                    if (!this.#t && !this.#e && !this.#r) {
                        if (this.#r = !0, this.#i.length) try {
                            for (let t of this.#i) t()
                        } catch (t) {
                            console.warn("Cancellation threw an error", t);
                            return
                        }
                        this.#i.length = 0, this.#a && this.#a(new i("Request aborted"))
                    }
                }
                get isCancelled() {
                    return this.#r
                }
            }
        },
        48397: () => {},
        65971: (t, e, r) => {
            "use strict";
            r.d(e, {
                V: () => o
            });
            var i = r(3806),
                s = r(26986);
            class o {
                static getArtistPrintYourOwnWidgetDataV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/print-your-own/widget"
                    })
                }
                static createContextAction(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/context-action/v1",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getLpGalleryItems(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/lp/v1/gallery-items",
                        query: {
                            artworkIds: t
                        }
                    })
                }
                static getLpTrustPilot() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/lp/v1/trustpilot"
                    })
                }
                static getListingPageV12(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/lp/v12/listing-page/{pageName}",
                        path: {
                            pageName: t
                        },
                        query: {
                            countryCode: e,
                            uvert: r
                        }
                    })
                }
                static getArtistArtworksByArtistIdV1(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/open-shop/v1/artist/artworks",
                        query: {
                            artistId: t,
                            sort: e,
                            size: r
                        }
                    })
                }
                static getArtistArtworksByArtistIdV2(t, e, r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/open-shop/v2/artist/artworks",
                        query: {
                            artistId: t,
                            sort: e,
                            size: r
                        }
                    })
                }
                static getSearchAutocompleteV2(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/search/v2/autocomplete-suggestions/{phrase}",
                        path: {
                            phrase: t
                        }
                    })
                }
                static getSearchAutocompleteV3(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/search/v3/autocomplete-suggestions/{phrase}",
                        path: {
                            phrase: t
                        }
                    })
                }
                static generalArtworkCategoriesV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/uploader/v1/artwork/categories"
                    })
                }
                static generalArtworkCategoriesV2(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/uploader/v2/artwork/categories",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getBundleListingPageV1(t, e = 1, r = 32, o = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/bundles",
                        query: {
                            page: e,
                            size: r,
                            countryCode: t,
                            uvert: o
                        }
                    })
                }
                static getBundleProductPageV1(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/bundles/{bundleSku}",
                        path: {
                            bundleSku: t
                        },
                        query: {
                            countryCode: e,
                            uvert: r
                        }
                    })
                }
                static getCartV1(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/cart",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getCheckoutV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/checkout",
                        query: {
                            countryCode: t
                        }
                    })
                }
                static getCollectorsPublicV1(t = 1, e = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors",
                        query: {
                            page: t,
                            limit: e
                        }
                    })
                }
                static getCollectorProfilePublicV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors/{nick}",
                        path: {
                            nick: t
                        }
                    })
                }
                static getCollectorCollectedArtworksPublicV1(t, e, r = 1, o = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors/{nick}/collected-artworks",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: r,
                            limit: o
                        }
                    })
                }
                static getCollectorGalleryImagesV1(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors/{nick}/gallery-images",
                        path: {
                            nick: e
                        },
                        query: {
                            uvert: r,
                            countryCode: t
                        }
                    })
                }
                static getCollectorWishlistSetsV1(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors/{nick}/wishlist-sets",
                        path: {
                            nick: e
                        },
                        query: {
                            uvert: r,
                            countryCode: t
                        }
                    })
                }
                static getCollectorWishlistSetV1(t, e, r, o, a, n = 1, u = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/collectors/{nick}/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            nick: t,
                            wishlistSetIdentity: e
                        },
                        query: {
                            orientation: r,
                            sort: o,
                            sortOrder: a,
                            page: n,
                            limit: u
                        }
                    })
                }
                static getFandomsListV1(t, e, r, o = "gen", a, n, u) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/fandoms",
                        query: {
                            uvert: o,
                            countryCode: t,
                            offset: e,
                            limit: r,
                            brandNameFilter: a,
                            categoryFilter: n,
                            sort: u
                        }
                    })
                }
                static getFandomsV1(t, e, r, o = "gen", a, n, u) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/fandoms/all",
                        query: {
                            uvert: o,
                            countryCode: t,
                            offset: e,
                            limit: r,
                            brandNameFilter: a,
                            categoryFilter: n,
                            sort: u
                        }
                    })
                }
                static getInspirationsV1(t, e = 1, r = 1, o, a = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/inspirations",
                        query: {
                            page: e,
                            pageSize: r,
                            categoryId: o,
                            uvert: a,
                            countryCode: t
                        }
                    })
                }
                static getLimitedEditionListing(t, e = 54) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/limited-editions",
                        query: {
                            offset: t,
                            limit: e
                        }
                    })
                }
                static getProductPassportPageV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/passports/{referenceNumber}",
                        path: {
                            referenceNumber: t
                        }
                    })
                }
                static getAvailableProductOptionsBySku(t, e = "US") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/products/{sku}",
                        path: {
                            sku: t
                        },
                        query: {
                            countryCode: e
                        },
                        errors: {
                            404: "Product options not found"
                        }
                    })
                }
                static getProductRenderDetailsBySkuV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/products/{sku}/render-details",
                        path: {
                            sku: t
                        }
                    })
                }
                static getPromotion() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/promotion"
                    })
                }
                static getAccessPoints(t, e, r, o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/shipment/access-points",
                        query: {
                            countryCode: t,
                            postalCode: e,
                            lat: r,
                            lng: o
                        }
                    })
                }
                static getShopHandbookV1(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/shop-handbook",
                        query: {
                            countryCode: t,
                            uvert: e
                        }
                    })
                }
                static confirmTakedownV1(t) {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/general/v1/takedowns/{confirmationHash}:confirm",
                        path: {
                            confirmationHash: t
                        }
                    })
                }
                static getUserSettingsGeneralV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/user-settings"
                    })
                }
                static getUserSettingsTaxOfficesV1(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/user-settings/tax-offices",
                        query: {
                            countryCode: t
                        }
                    })
                }
                static getVerifiedArtistsV1(t, e = "gen", r = 1, o = 15) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/verified-origin",
                        query: {
                            uvert: e,
                            countryCode: t,
                            page: r,
                            size: o
                        }
                    })
                }
                static getVerifiedArtistsSliderV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/verified-origin/slider"
                    })
                }
                static getVerifiedOriginVideoSliderV1() {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v1/verified-origin/video-slider"
                    })
                }
                static getBrandsFilteredForCountryV10(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v10/brands",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getBrandArtworksV10(t, e, r, o = "gen", a = 1, n = 108, u) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v10/brands/{brandSlug}/artworks",
                        path: {
                            brandSlug: t
                        },
                        query: {
                            sort: e,
                            uvert: o,
                            countryCode: r,
                            page: a,
                            limit: n,
                            artworkLabel: u
                        }
                    })
                }
                static getBrandCollectionsV10(t, e, r, o = "gen", a = 1, n = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v10/brands/{brandSlug}/collections",
                        path: {
                            brandSlug: t
                        },
                        query: {
                            sort: e,
                            uvert: o,
                            countryCode: r,
                            page: a,
                            limit: n
                        }
                    })
                }
                static getLuminoListingV10(t, e, r = "gen", o) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v10/lumino/listing",
                        query: {
                            uvert: r,
                            limit: o,
                            countryCode: t,
                            au: e
                        }
                    })
                }
                static getBrandArtworksV11(t, e, r, o = "gen", a = 1, n = 108, u, l) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v11/brands/{brandSlug}/artworks",
                        path: {
                            brandSlug: t
                        },
                        query: {
                            sort: e,
                            uvert: o,
                            countryCode: r,
                            page: a,
                            limit: n,
                            artworkLabel: u,
                            phrase: l
                        }
                    })
                }
                static getLimitedEditionOverviewV11(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v11/limited-editions/{artworkId}",
                        path: {
                            artworkId: t
                        },
                        query: {
                            uvert: r,
                            countryCode: e
                        }
                    })
                }
                static getBrowsePostersV12(t, e, r, o, a, n, u, l, c = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v12/posters/browse",
                        query: {
                            category: o,
                            orientation: a,
                            artStyle: n,
                            colors: u,
                            collection: l,
                            uvert: c,
                            page: t,
                            limit: e,
                            countryCode: r
                        }
                    })
                }
                static getHomepageV19(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v19/homepage",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getCollectorsPublicV2(t, e = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/collectors",
                        query: {
                            offset: t,
                            limit: e
                        }
                    })
                }
                static getCollectorCollectedArtworksPublicV2(t, e, r, o = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/collectors/{nick}/collected-artworks",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            offset: r,
                            limit: o
                        }
                    })
                }
                static getCollectorWishlistSetV2(t, e, r, o, a, n, u = "gen", l = 1, c = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/collectors/{nick}/wishlist-sets/{wishlistSetIdentity}",
                        path: {
                            nick: e,
                            wishlistSetIdentity: r
                        },
                        query: {
                            uvert: u,
                            countryCode: t,
                            orientation: o,
                            sort: a,
                            sortOrder: n,
                            page: l,
                            limit: c
                        }
                    })
                }
                static getCustomDisplateGeneralPdpPageData(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/custom-displate",
                        query: {
                            countryCode: t,
                            au: e,
                            uvert: r
                        }
                    })
                }
                static getInspirationsV2(t, e = 1, r = 1, o, a = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/inspirations",
                        query: {
                            page: e,
                            pageSize: r,
                            categoryId: o,
                            uvert: a,
                            countryCode: t
                        }
                    })
                }
                static confirmTakedownV2(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "POST",
                        url: "/elysium-api/general/v2/takedowns/{confirmationHash}:confirm",
                        path: {
                            confirmationHash: t
                        },
                        query: {
                            countryCode: e,
                            uvert: r
                        }
                    })
                }
                static getTermsOfUseV2(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v2/terms-of-use",
                        query: {
                            region: t,
                            uvert: r,
                            countryCode: e
                        },
                        errors: {
                            400: "Invalid region parameter"
                        }
                    })
                }
                static getDisplatePdpV20(t, e, r, o, a = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v20/displate-pdp/{artworkId}",
                        path: {
                            artworkId: t
                        },
                        query: {
                            countryCode: e,
                            type: r,
                            size: o,
                            uvert: a
                        }
                    })
                }
                static getHomepageV20(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v20/homepage",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getHomepageInspirationsV20(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v20/homepage/inspirations/{categoryId}",
                        path: {
                            categoryId: t
                        }
                    })
                }
                static getDisplatePdpV21(t, e, r, o, a = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v21/displate-pdp/{artworkId}",
                        path: {
                            artworkId: t
                        },
                        query: {
                            countryCode: e,
                            type: r,
                            size: o,
                            uvert: a
                        }
                    })
                }
                static getCustomDisplateGeneralPdpV3PageData(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v3/custom-displate",
                        query: {
                            countryCode: t,
                            au: e,
                            uvert: r
                        }
                    })
                }
                static getCustomDisplateHomepageInspirationsV3(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v3/custom-displate/inspirations/{categoryId}",
                        path: {
                            categoryId: t
                        }
                    })
                }
                static getStrapiContentsWithParamsV3(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v3/static-pages/contents/{key}",
                        path: {
                            key: t
                        },
                        query: {
                            params: e
                        }
                    })
                }
                static getArtistArtworksV6(t, e, r, o, a = 1, n = 108, u, l = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v6/artists/{nick}/artworks",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: a,
                            limit: n,
                            type: r,
                            artworkLabel: u,
                            uvert: l,
                            countryCode: o
                        }
                    })
                }
                static getArtistCollectionsV6(t, e, r, o, a = 1, n = 108, u = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v6/artists/{nick}/collections",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: a,
                            limit: n,
                            type: r,
                            uvert: u,
                            countryCode: o
                        }
                    })
                }
                static getDisplateClubV6(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v6/displate-club",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getHeaderV6(t, e) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v6/headers/{userVertical}/{countryCode}",
                        path: {
                            userVertical: t,
                            countryCode: e
                        }
                    })
                }
                static getWhatsADisplateV6(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v6/whats-a-displate",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getArtistArtworksV7(t, e, r, o, a = 1, n = 108, u, l = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v7/artists/{nick}/artworks",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: a,
                            limit: n,
                            type: r,
                            artworkLabel: u,
                            uvert: l,
                            countryCode: o
                        }
                    })
                }
                static getArtistCollectionsV7(t, e, r, o, a = 1, n = 108, u = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v7/artists/{nick}/collections",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: a,
                            limit: n,
                            type: r,
                            uvert: u,
                            countryCode: o
                        }
                    })
                }
                static getWhatsADisplateV7(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v7/whats-a-displate",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getArtistArtworksV8(t, e, r, o, a = 1, n = 108, u, l, c = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/artists/{nick}/artworks",
                        path: {
                            nick: t
                        },
                        query: {
                            sort: e,
                            page: a,
                            limit: n,
                            type: r,
                            artworkLabel: u,
                            phrase: l,
                            uvert: c,
                            countryCode: o
                        }
                    })
                }
                static getArtistsCollectionV8(t, e, r, o, a = "gen", n = 1, u = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/artists/{nick}/collections/{collectionSlug}",
                        path: {
                            nick: t,
                            collectionSlug: e
                        },
                        query: {
                            sort: r,
                            uvert: a,
                            page: n,
                            limit: u,
                            countryCode: o
                        }
                    })
                }
                static getGiftCardV8(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/gift-card",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getVisualSearchGeneralV8(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/visual-search/{artworkId}",
                        path: {
                            artworkId: t
                        },
                        query: {
                            uvert: r,
                            countryCode: e
                        }
                    })
                }
                static getWhatsADisplateV8(t, e = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/whats-a-displate",
                        query: {
                            uvert: e,
                            countryCode: t
                        }
                    })
                }
                static getWhatsADisplateInspirationsV8(t) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v8/whats-a-displate/inspirations/{categoryId}",
                        path: {
                            categoryId: t
                        }
                    })
                }
                static getBrandArtworksV9(t, e, r, o = "gen", a = 1, n = 108, u) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v9/brands/{brandSlug}/artworks",
                        path: {
                            brandSlug: t
                        },
                        query: {
                            sort: e,
                            uvert: o,
                            countryCode: r,
                            page: a,
                            limit: n,
                            artworkLabel: u
                        }
                    })
                }
                static getBrandCollectionsV9(t, e, r, o = "gen", a = 1, n = 108) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v9/brands/{brandSlug}/collections",
                        path: {
                            brandSlug: t
                        },
                        query: {
                            sort: e,
                            uvert: o,
                            countryCode: r,
                            page: a,
                            limit: n
                        }
                    })
                }
                static getLuminoListingV9(t, e = "gen", r) {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v9/lumino/listing",
                        query: {
                            uvert: e,
                            limit: r,
                            countryCode: t
                        }
                    })
                }
                static getSearchGeneralV9(t, e, r = "gen") {
                    return (0, s.E)(i.D, {
                        method: "GET",
                        url: "/elysium-api/general/v9/search",
                        query: {
                            phrase: e,
                            uvert: r,
                            countryCode: t
                        }
                    })
                }
            }
        },
        71742: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => D
            });
            var i = r(37876),
                s = r(14232);
            r(48397);
            try {
                self["workbox:window:7.3.0"] && _()
            } catch (t) {}

            function o(t, e) {
                return new Promise(function(r) {
                    var i = new MessageChannel;
                    i.port1.onmessage = function(t) {
                        r(t.data)
                    }, t.postMessage(e, [i.port2])
                })
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
                return i
            }

            function n(t, e) {
                return (n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            try {
                self["workbox:core:7.3.0"] && _()
            } catch (t) {}
            var u = function() {
                var t = this;
                this.promise = new Promise(function(e, r) {
                    t.resolve = e, t.reject = r
                })
            };

            function l(t, e) {
                var r = location.href;
                return new URL(t, r).href === new URL(e, r).href
            }
            var c = function(t, e) {
                this.type = t, Object.assign(this, e)
            };

            function d(t, e, r) {
                return r ? e ? e(t) : t : (t && t.then || (t = Promise.resolve(t)), e ? t.then(e) : t)
            }

            function p() {}
            var h = {
                type: "SKIP_WAITING"
            };

            function m(t, e) {
                if (!e) return t && t.then ? t.then(p) : Promise.resolve()
            }
            var E = function(t) {
                    function e(e, r) {
                        var i, s;
                        return void 0 === r && (r = {}), (i = t.call(this) || this).nn = {}, i.tn = 0, i.rn = new u, i.en = new u, i.on = new u, i.un = 0, i.an = new Set, i.cn = function() {
                            var t = i.fn,
                                e = t.installing;
                            i.tn > 0 || !l(e.scriptURL, i.sn.toString()) || performance.now() > i.un + 6e4 ? (i.vn = e, t.removeEventListener("updatefound", i.cn)) : (i.hn = e, i.an.add(e), i.rn.resolve(e)), ++i.tn, e.addEventListener("statechange", i.ln)
                        }, i.ln = function(t) {
                            var e = i.fn,
                                r = t.target,
                                s = r.state,
                                o = r === i.vn,
                                a = {
                                    sw: r,
                                    isExternal: o,
                                    originalEvent: t
                                };
                            !o && i.mn && (a.isUpdate = !0), i.dispatchEvent(new c(s, a)), "installed" === s ? i.wn = self.setTimeout(function() {
                                "installed" === s && e.waiting === r && i.dispatchEvent(new c("waiting", a))
                            }, 200) : "activating" === s && (clearTimeout(i.wn), o || i.en.resolve(r))
                        }, i.yn = function(t) {
                            var e = i.hn,
                                r = e !== navigator.serviceWorker.controller;
                            i.dispatchEvent(new c("controlling", {
                                isExternal: r,
                                originalEvent: t,
                                sw: e,
                                isUpdate: i.mn
                            })), r || i.on.resolve(e)
                        }, s = function(t) {
                            var e = t.data,
                                r = t.ports,
                                s = t.source;
                            return d(i.getSW(), function() {
                                i.an.has(s) && i.dispatchEvent(new c("message", {
                                    data: e,
                                    originalEvent: t,
                                    ports: r,
                                    sw: s
                                }))
                            })
                        }, i.gn = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            try {
                                return Promise.resolve(s.apply(this, t))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.sn = e, i.nn = r, navigator.serviceWorker.addEventListener("message", i.gn), i
                    }
                    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, n(e, t);
                    var r, i = e.prototype;
                    return i.register = function(t) {
                            var e = (void 0 === t ? {} : t).immediate,
                                r = void 0 !== e && e;
                            try {
                                var i, s, o, a = this;
                                return d((i = function() {
                                    if (!r && "complete" !== document.readyState) return m(new Promise(function(t) {
                                        return window.addEventListener("load", t)
                                    }))
                                }, s = function() {
                                    return a.mn = !!navigator.serviceWorker.controller, a.dn = a.pn(), d(a.bn(), function(t) {
                                        a.fn = t, a.dn && (a.hn = a.dn, a.en.resolve(a.dn), a.on.resolve(a.dn), a.dn.addEventListener("statechange", a.ln, {
                                            once: !0
                                        }));
                                        var e = a.fn.waiting;
                                        return e && l(e.scriptURL, a.sn.toString()) && (a.hn = e, Promise.resolve().then(function() {
                                            a.dispatchEvent(new c("waiting", {
                                                sw: e,
                                                wasWaitingBeforeRegister: !0
                                            }))
                                        }).then(function() {})), a.hn && (a.rn.resolve(a.hn), a.an.add(a.hn)), a.fn.addEventListener("updatefound", a.cn), navigator.serviceWorker.addEventListener("controllerchange", a.yn), a.fn
                                    })
                                }, (o = i()) && o.then ? o.then(s) : s(o)))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.update = function() {
                            try {
                                return this.fn ? d(m(this.fn.update())) : d()
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getSW = function() {
                            return void 0 !== this.hn ? Promise.resolve(this.hn) : this.rn.promise
                        }, i.messageSW = function(t) {
                            try {
                                return d(this.getSW(), function(e) {
                                    return o(e, t)
                                })
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.messageSkipWaiting = function() {
                            this.fn && this.fn.waiting && o(this.fn.waiting, h)
                        }, i.pn = function() {
                            var t = navigator.serviceWorker.controller;
                            return t && l(t.scriptURL, this.sn.toString()) ? t : void 0
                        }, i.bn = function() {
                            try {
                                var t = this;
                                return d(function(t, e) {
                                    try {
                                        var r = t()
                                    } catch (t) {
                                        return e(t)
                                    }
                                    return r && r.then ? r.then(void 0, e) : r
                                }(function() {
                                    return d(navigator.serviceWorker.register(t.sn, t.nn), function(e) {
                                        return t.un = performance.now(), e
                                    })
                                }, function(t) {
                                    throw t
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, r = [{
                            key: "active",
                            get: function() {
                                return this.en.promise
                            }
                        }, {
                            key: "controlling",
                            get: function() {
                                return this.on.promise
                            }
                        }],
                        function(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, function(t) {
                                    var e = function(t, e) {
                                        if ("object" != typeof t || !t) return t;
                                        var r = t[Symbol.toPrimitive];
                                        if (void 0 !== r) {
                                            var i = r.call(t, e || "default");
                                            if ("object" != typeof i) return i;
                                            throw TypeError("@@toPrimitive must return a primitive value.")
                                        }
                                        return ("string" === e ? String : Number)(t)
                                    }(t, "string");
                                    return "symbol" == typeof e ? e : e + ""
                                }(i.key), i)
                            }
                        }(e.prototype, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                }(function() {
                    function t() {
                        this.Pn = new Map
                    }
                    var e = t.prototype;
                    return e.addEventListener = function(t, e) {
                        this.jn(t).add(e)
                    }, e.removeEventListener = function(t, e) {
                        this.jn(t).delete(e)
                    }, e.dispatchEvent = function(t) {
                        t.target = this;
                        for (var e, r = function(t) {
                                var e = "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (e) return (e = e.call(t)).next.bind(e);
                                if (Array.isArray(t) || (e = function(t) {
                                        if (t) {
                                            if ("string" == typeof t) return a(t, void 0);
                                            var e = ({}).toString.call(t).slice(8, -1);
                                            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, void 0) : void 0
                                        }
                                    }(t))) {
                                    e && (t = e);
                                    var r = 0;
                                    return function() {
                                        return r >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[r++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(this.jn(t.type)); !(e = r()).done;)(0, e.value)(t)
                    }, e.jn = function(t) {
                        return this.Pn.has(t) || this.Pn.set(t, new Set), this.Pn.get(t)
                    }, t
                }()),
                y = r(84810);
            let f = t => "installed" === t.state || "activating" === t.state || "activated" === t.state,
                g = () => {
                    let t = (0, s.useRef)(null),
                        e = (0, s.useRef)(!0),
                        r = (0, s.useRef)(null),
                        i = (0, s.useRef)({});
                    return (0, s.useEffect)(() => {
                        if (!("serviceWorker" in navigator) || y.ConfigPublic.IsLocalEnvironment) return;
                        let s = new E("/_next/static/sw-ely.js", {
                            scope: "/"
                        });
                        r.current = s;
                        let o = t => {
                                t && t.worker.removeEventListener("statechange", t.handler)
                            },
                            a = () => {
                                t.current && (clearTimeout(t.current), t.current = null)
                            },
                            n = () => e.current && null !== r.current,
                            u = () => {
                                n() && r.current.messageSkipWaiting()
                            },
                            l = () => {
                                n() && r.current.update()
                            },
                            c = () => {
                                !document.hidden && n() && r.current.update()
                            };
                        s.addEventListener("waiting", u), s.addEventListener("controlling", l), document.addEventListener("visibilitychange", c);
                        let d = s => {
                            if (i.current.active ? .worker === s) return;
                            o(i.current.active), o(i.current.installing), i.current.installing ? .worker === s && (i.current.installing = void 0);
                            let u = () => {
                                "activated" === s.state && e.current && (a(), t.current = setTimeout(() => {
                                    n() && r.current.update()
                                }, 1e3))
                            };
                            s.addEventListener("statechange", u), "activated" === s.state && e.current && u(), i.current.active = {
                                worker: s,
                                handler: u
                            }
                        };
                        return s.register().then(t => {
                            if (!t || !e.current) return;
                            t.active && (s.update(), f(t.active) && d(t.active)), t.waiting && s.messageSkipWaiting();
                            let r = t.installing;
                            if (r)
                                if (f(r)) d(r);
                                else {
                                    let t = () => {
                                        f(r) && d(r)
                                    };
                                    r.addEventListener("statechange", t), i.current.installing = {
                                        worker: r,
                                        handler: t
                                    }
                                }
                        }).catch(t => {
                            console.error("Service worker registration failed:", t)
                        }), () => {
                            e.current = !1, a(), o(i.current.installing), o(i.current.active);
                            let t = r.current;
                            t && (t.removeEventListener("waiting", u), t.removeEventListener("controlling", l)), document.removeEventListener("visibilitychange", c), i.current = {}, r.current = null
                        }
                    }, []), null
                };
            var T = r(15573),
                I = r(87050);
            let v = t => t ? {
                [T.jh]: y.ConfigPublic.BuildVersion,
                "App-Env": "web",
                [T.MI]: t
            } : {
                [T.jh]: y.ConfigPublic.BuildVersion,
                "App-Env": "web"
            };
            I.Ds.BASE = "", I.Ds.HEADERS = v(null); {
                let t = globalThis.fetch.bind(globalThis);
                globalThis.fetch = async (...e) => {
                    let r = await t(...e);
                    return null !== r.headers.get("stale-session") && window.location.reload(), r
                }
            }
            let D = ({
                Component: t,
                pageProps: e
            }) => {
                let {
                    key: r,
                    ...o
                } = e;
                (0, s.useEffect)(() => {
                    I.Ds.HEADERS = v(e.tpid)
                }, [e.tpid]);
                let a = t.getLayout ? ? (t => t);
                return (0, i.jsxs)(i.Fragment, {
                    children: [a((0, i.jsx)(t, { ...o
                    }, r)), (0, i.jsx)(g, {})]
                })
            }
        },
        81370: (t, e) => {
            "use strict";
            e.byteLength = function(t) {
                var e = u(t),
                    r = e[0],
                    i = e[1];
                return (r + i) * 3 / 4 - i
            }, e.toByteArray = function(t) {
                var e, r, o = u(t),
                    a = o[0],
                    n = o[1],
                    l = new s((a + n) * 3 / 4 - n),
                    c = 0,
                    d = n > 0 ? a - 4 : a;
                for (r = 0; r < d; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], l[c++] = e >> 16 & 255, l[c++] = e >> 8 & 255, l[c++] = 255 & e;
                return 2 === n && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, l[c++] = 255 & e), 1 === n && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, l[c++] = e >> 8 & 255, l[c++] = 255 & e), l
            }, e.fromByteArray = function(t) {
                for (var e, i = t.length, s = i % 3, o = [], a = 0, n = i - s; a < n; a += 16383) o.push(function(t, e, i) {
                    for (var s, o = [], a = e; a < i; a += 3) s = (t[a] << 16 & 0xff0000) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), o.push(r[s >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
                    return o.join("")
                }(t, a, a + 16383 > n ? n : a + 16383));
                return 1 === s ? o.push(r[(e = t[i - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === s && o.push(r[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
            };
            for (var r = [], i = [], s = "u" > typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, n = o.length; a < n; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("="); - 1 === r && (r = e);
                var i = r === e ? 0 : 4 - r % 4;
                return [r, i]
            }
            i[45] = 62, i[95] = 63
        },
        82909: (t, e, r) => {
            "use strict";
            let i = r(81370),
                s = r(87247),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function a(t) {
                if (t > 0x7fffffff) throw RangeError('The value "' + t + '" is invalid for option "size"');
                let e = new Uint8Array(t);
                return Object.setPrototypeOf(e, n.prototype), e
            }

            function n(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                    return c(t)
                }
                return u(t, e, r)
            }

            function u(t, e, r) {
                if ("string" == typeof t) {
                    var i = t,
                        s = e;
                    if (("string" != typeof s || "" === s) && (s = "utf8"), !n.isEncoding(s)) throw TypeError("Unknown encoding: " + s);
                    let r = 0 | m(i, s),
                        o = a(r),
                        u = o.write(i, s);
                    return u !== r && (o = o.slice(0, u)), o
                }
                if (ArrayBuffer.isView(t)) {
                    var o = t;
                    if (k(o, Uint8Array)) {
                        let t = new Uint8Array(o);
                        return p(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return d(o)
                }
                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (k(t, ArrayBuffer) || t && k(t.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (k(t, SharedArrayBuffer) || t && k(t.buffer, SharedArrayBuffer))) return p(t, e, r);
                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                let u = t.valueOf && t.valueOf();
                if (null != u && u !== t) return n.from(u, e, r);
                let l = function(t) {
                    if (n.isBuffer(t)) {
                        let e = 0 | h(t.length),
                            r = a(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || function(t) {
                        return t != t
                    }(t.length) ? a(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
                }(t);
                if (l) return l;
                if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return n.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function l(t) {
                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function c(t) {
                return l(t), a(t < 0 ? 0 : 0 | h(t))
            }

            function d(t) {
                let e = t.length < 0 ? 0 : 0 | h(t.length),
                    r = a(e);
                for (let i = 0; i < e; i += 1) r[i] = 255 & t[i];
                return r
            }

            function p(t, e, r) {
                let i;
                if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(i = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), n.prototype), i
            }

            function h(t) {
                if (t >= 0x7fffffff) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | t
            }

            function m(t, e) {
                if (n.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || k(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                let r = t.length,
                    i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === r) return 0;
                let s = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return V(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return G(t).length;
                    default:
                        if (s) return i ? -1 : V(t).length;
                        e = ("" + e).toLowerCase(), s = !0
                }
            }

            function E(t, e, r) {
                let s = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return function(t, e, r) {
                            let i = t.length;
                            (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
                            let s = "";
                            for (let i = e; i < r; ++i) s += M[t[i]];
                            return s
                        }(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return T(this, e, r);
                    case "ascii":
                        return function(t, e, r) {
                            let i = "";
                            r = Math.min(t.length, r);
                            for (let s = e; s < r; ++s) i += String.fromCharCode(127 & t[s]);
                            return i
                        }(this, e, r);
                    case "latin1":
                    case "binary":
                        return function(t, e, r) {
                            let i = "";
                            r = Math.min(t.length, r);
                            for (let s = e; s < r; ++s) i += String.fromCharCode(t[s]);
                            return i
                        }(this, e, r);
                    case "base64":
                        var o, a, n;
                        return o = this, a = e, n = r, 0 === a && n === o.length ? i.fromByteArray(o) : i.fromByteArray(o.slice(a, n));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(t, e, r) {
                            let i = t.slice(e, r),
                                s = "";
                            for (let t = 0; t < i.length - 1; t += 2) s += String.fromCharCode(i[t] + 256 * i[t + 1]);
                            return s
                        }(this, e, r);
                    default:
                        if (s) throw TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), s = !0
                }
            }

            function y(t, e, r) {
                let i = t[e];
                t[e] = t[r], t[r] = i
            }

            function f(t, e, r, i, s) {
                var o;
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (i = r, r = 0) : r > 0x7fffffff ? r = 0x7fffffff : r < -0x80000000 && (r = -0x80000000), (o = r *= 1) != o && (r = s ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)
                    if (s) return -1;
                    else r = t.length - 1;
                else if (r < 0)
                    if (!s) return -1;
                    else r = 0;
                if ("string" == typeof e && (e = n.from(e, i)), n.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, r, i, s);
                if ("number" == typeof e) {
                    if (e &= 255, "function" == typeof Uint8Array.prototype.indexOf)
                        if (s) return Uint8Array.prototype.indexOf.call(t, e, r);
                        else return Uint8Array.prototype.lastIndexOf.call(t, e, r);
                    return g(t, [e], r, i, s)
                }
                throw TypeError("val must be string, number or Buffer")
            }

            function g(t, e, r, i, s) {
                let o, a = 1,
                    n = t.length,
                    u = e.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    a = 2, n /= 2, u /= 2, r /= 2
                }

                function l(t, e) {
                    return 1 === a ? t[e] : t.readUInt16BE(e * a)
                }
                if (s) {
                    let i = -1;
                    for (o = r; o < n; o++)
                        if (l(t, o) === l(e, -1 === i ? 0 : o - i)) {
                            if (-1 === i && (i = o), o - i + 1 === u) return i * a
                        } else -1 !== i && (o -= o - i), i = -1
                } else
                    for (r + u > n && (r = n - u), o = r; o >= 0; o--) {
                        let r = !0;
                        for (let i = 0; i < u; i++)
                            if (l(t, o + i) !== l(e, i)) {
                                r = !1;
                                break
                            }
                        if (r) return o
                    }
                return -1
            }

            function T(t, e, r) {
                r = Math.min(t.length, r);
                let i = [],
                    s = e;
                for (; s < r;) {
                    let e = t[s],
                        o = null,
                        a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (s + a <= r) {
                        let r, i, n, u;
                        switch (a) {
                            case 1:
                                e < 128 && (o = e);
                                break;
                            case 2:
                                (192 & (r = t[s + 1])) == 128 && (u = (31 & e) << 6 | 63 & r) > 127 && (o = u);
                                break;
                            case 3:
                                r = t[s + 1], i = t[s + 2], (192 & r) == 128 && (192 & i) == 128 && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & i) > 2047 && (u < 55296 || u > 57343) && (o = u);
                                break;
                            case 4:
                                r = t[s + 1], i = t[s + 2], n = t[s + 3], (192 & r) == 128 && (192 & i) == 128 && (192 & n) == 128 && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & n) > 65535 && u < 1114112 && (o = u)
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), s += a
                }
                var o = i;
                let a = o.length;
                if (a <= 4096) return String.fromCharCode.apply(String, o);
                let n = "",
                    u = 0;
                for (; u < a;) n += String.fromCharCode.apply(String, o.slice(u, u += 4096));
                return n
            }

            function I(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
            }

            function v(t, e, r, i, s, o) {
                if (!n.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > s || e < o) throw RangeError('"value" argument is out of bounds');
                if (r + i > t.length) throw RangeError("Index out of range")
            }

            function D(t, e, r, i, s) {
                b(e, i, s, t, r, 7);
                let o = Number(e & BigInt(0xffffffff));
                t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
                let a = Number(e >> BigInt(32) & BigInt(0xffffffff));
                return t[r++] = a, a >>= 8, t[r++] = a, a >>= 8, t[r++] = a, a >>= 8, t[r++] = a, r
            }

            function A(t, e, r, i, s) {
                b(e, i, s, t, r, 7);
                let o = Number(e & BigInt(0xffffffff));
                t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
                let a = Number(e >> BigInt(32) & BigInt(0xffffffff));
                return t[r + 3] = a, a >>= 8, t[r + 2] = a, a >>= 8, t[r + 1] = a, a >>= 8, t[r] = a, r + 8
            }

            function C(t, e, r, i, s, o) {
                if (r + i > t.length || r < 0) throw RangeError("Index out of range")
            }

            function S(t, e, r, i, o) {
                return e *= 1, r >>>= 0, o || C(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), s.write(t, e, r, i, 23, 4), r + 4
            }

            function N(t, e, r, i, o) {
                return e *= 1, r >>>= 0, o || C(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), s.write(t, e, r, i, 52, 8), r + 8
            }
            e.hp = n, e.IS = 50, n.TYPED_ARRAY_SUPPORT = function() {
                try {
                    let t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), !n.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(n.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (n.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(n.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (n.isBuffer(this)) return this.byteOffset
                }
            }), n.poolSize = 8192, n.from = function(t, e, r) {
                return u(t, e, r)
            }, Object.setPrototypeOf(n.prototype, Uint8Array.prototype), Object.setPrototypeOf(n, Uint8Array), n.alloc = function(t, e, r) {
                return (l(t), t <= 0) ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t)
            }, n.allocUnsafe = function(t) {
                return c(t)
            }, n.allocUnsafeSlow = function(t) {
                return c(t)
            }, n.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== n.prototype
            }, n.compare = function(t, e) {
                if (k(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), k(e, Uint8Array) && (e = n.from(e, e.offset, e.byteLength)), !n.isBuffer(t) || !n.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    i = e.length;
                for (let s = 0, o = Math.min(r, i); s < o; ++s)
                    if (t[s] !== e[s]) {
                        r = t[s], i = e[s];
                        break
                    }
                return r < i ? -1 : +(i < r)
            }, n.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, n.concat = function(t, e) {
                let r;
                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return n.alloc(0);
                if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                let i = n.allocUnsafe(e),
                    s = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (k(e, Uint8Array)) s + e.length > i.length ? (n.isBuffer(e) || (e = n.from(e)), e.copy(i, s)) : Uint8Array.prototype.set.call(i, e, s);
                    else if (n.isBuffer(e)) e.copy(i, s);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    s += e.length
                }
                return i
            }, n.byteLength = m, n.prototype._isBuffer = !0, n.prototype.swap16 = function() {
                let t = this.length;
                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, n.prototype.swap32 = function() {
                let t = this.length;
                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, n.prototype.swap64 = function() {
                let t = this.length;
                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, n.prototype.toString = function() {
                let t = this.length;
                return 0 === t ? "" : 0 == arguments.length ? T(this, 0, t) : E.apply(this, arguments)
            }, n.prototype.toLocaleString = n.prototype.toString, n.prototype.equals = function(t) {
                if (!n.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                return this === t || 0 === n.compare(this, t)
            }, n.prototype.inspect = function() {
                let t = "",
                    r = e.IS;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (n.prototype[o] = n.prototype.inspect), n.prototype.compare = function(t, e, r, i, s) {
                if (k(t, Uint8Array) && (t = n.from(t, t.offset, t.byteLength)), !n.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), void 0 === s && (s = this.length), e < 0 || r > t.length || i < 0 || s > this.length) throw RangeError("out of range index");
                if (i >= s && e >= r) return 0;
                if (i >= s) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, i >>>= 0, s >>>= 0, this === t) return 0;
                let o = s - i,
                    a = r - e,
                    u = Math.min(o, a),
                    l = this.slice(i, s),
                    c = t.slice(e, r);
                for (let t = 0; t < u; ++t)
                    if (l[t] !== c[t]) {
                        o = l[t], a = c[t];
                        break
                    }
                return o < a ? -1 : +(a < o)
            }, n.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, n.prototype.indexOf = function(t, e, r) {
                return f(this, t, e, r, !0)
            }, n.prototype.lastIndexOf = function(t, e, r) {
                return f(this, t, e, r, !1)
            }, n.prototype.write = function(t, e, r, i) {
                var s, o, a, n, u, l, c, d;
                if (void 0 === e) i = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) i = e, r = this.length, e = 0;
                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let p = this.length - e;
                if ((void 0 === r || r > p) && (r = p), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                let h = !1;
                for (;;) switch (i) {
                    case "hex":
                        return function(t, e, r, i) {
                            let s;
                            r = Number(r) || 0;
                            let o = t.length - r;
                            i ? (i = Number(i)) > o && (i = o) : i = o;
                            let a = e.length;
                            for (i > a / 2 && (i = a / 2), s = 0; s < i; ++s) {
                                var n;
                                let i = parseInt(e.substr(2 * s, 2), 16);
                                if ((n = i) != n) break;
                                t[r + s] = i
                            }
                            return s
                        }(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return s = e, o = r, B(V(t, this.length - s), this, s, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return a = e, n = r, B(function(t) {
                            let e = [];
                            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e
                        }(t), this, a, n);
                    case "base64":
                        return u = e, l = r, B(G(t), this, u, l);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return c = e, d = r, B(function(t, e) {
                            let r, i, s = [];
                            for (let o = 0; o < t.length && !((e -= 2) < 0); ++o) i = (r = t.charCodeAt(o)) >> 8, s.push(r % 256), s.push(i);
                            return s
                        }(t, this.length - c), this, c, d);
                    default:
                        if (h) throw TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), h = !0
                }
            }, n.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, n.prototype.slice = function(t, e) {
                let r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                let i = this.subarray(t, e);
                return Object.setPrototypeOf(i, n.prototype), i
            }, n.prototype.readUintLE = n.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || I(t, e, this.length);
                let i = this[t],
                    s = 1,
                    o = 0;
                for (; ++o < e && (s *= 256);) i += this[t + o] * s;
                return i
            }, n.prototype.readUintBE = n.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || I(t, e, this.length);
                let i = this[t + --e],
                    s = 1;
                for (; e > 0 && (s *= 256);) i += this[t + --e] * s;
                return i
            }, n.prototype.readUint8 = n.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || I(t, 1, this.length), this[t]
            }, n.prototype.readUint16LE = n.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || I(t, 2, this.length), this[t] | this[t + 1] << 8
            }, n.prototype.readUint16BE = n.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || I(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, n.prototype.readUint32LE = n.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 0x1000000 * this[t + 3]
            }, n.prototype.readUint32BE = n.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), 0x1000000 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, n.prototype.readBigUInt64LE = j(function(t) {
                w(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && L(t, this.length - 8);
                let i = e + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t],
                    s = this[++t] + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * r;
                return BigInt(i) + (BigInt(s) << BigInt(32))
            }), n.prototype.readBigUInt64BE = j(function(t) {
                w(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                (void 0 === e || void 0 === r) && L(t, this.length - 8);
                let i = 0x1000000 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    s = 0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(i) << BigInt(32)) + BigInt(s)
            }), n.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || I(t, e, this.length);
                let i = this[t],
                    s = 1,
                    o = 0;
                for (; ++o < e && (s *= 256);) i += this[t + o] * s;
                return i >= (s *= 128) && (i -= Math.pow(2, 8 * e)), i
            }, n.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || I(t, e, this.length);
                let i = e,
                    s = 1,
                    o = this[t + --i];
                for (; i > 0 && (s *= 256);) o += this[t + --i] * s;
                return o >= (s *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, n.prototype.readInt8 = function(t, e) {
                return (t >>>= 0, e || I(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
            }, n.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || I(t, 2, this.length);
                let r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 0xffff0000 | r : r
            }, n.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || I(t, 2, this.length);
                let r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 0xffff0000 | r : r
            }, n.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, n.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, n.prototype.readBigInt64LE = j(function(t) {
                w(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && L(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + 0x1000000 * this[++t])
            }), n.prototype.readBigInt64BE = j(function(t) {
                w(t >>>= 0, "offset");
                let e = this[t],
                    r = this[t + 7];
                return (void 0 === e || void 0 === r) && L(t, this.length - 8), (BigInt((e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]) << BigInt(32)) + BigInt(0x1000000 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r)
            }), n.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), s.read(this, t, !0, 23, 4)
            }, n.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || I(t, 4, this.length), s.read(this, t, !1, 23, 4)
            }, n.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || I(t, 8, this.length), s.read(this, t, !0, 52, 8)
            }, n.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || I(t, 8, this.length), s.read(this, t, !1, 52, 8)
            }, n.prototype.writeUintLE = n.prototype.writeUIntLE = function(t, e, r, i) {
                if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r) - 1;
                    v(this, t, e, r, i, 0)
                }
                let s = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256);) this[e + o] = t / s & 255;
                return e + r
            }, n.prototype.writeUintBE = n.prototype.writeUIntBE = function(t, e, r, i) {
                if (t *= 1, e >>>= 0, r >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r) - 1;
                    v(this, t, e, r, i, 0)
                }
                let s = r - 1,
                    o = 1;
                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
                return e + r
            }, n.prototype.writeUint8 = n.prototype.writeUInt8 = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, n.prototype.writeUint16LE = n.prototype.writeUInt16LE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, n.prototype.writeUint16BE = n.prototype.writeUInt16BE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, n.prototype.writeUint32LE = n.prototype.writeUInt32LE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 4, 0xffffffff, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, n.prototype.writeUint32BE = n.prototype.writeUInt32BE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 4, 0xffffffff, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, n.prototype.writeBigUInt64LE = j(function(t, e = 0) {
                return D(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), n.prototype.writeBigUInt64BE = j(function(t, e = 0) {
                return A(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }), n.prototype.writeIntLE = function(t, e, r, i) {
                if (t *= 1, e >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r - 1);
                    v(this, t, e, r, i - 1, -i)
                }
                let s = 0,
                    o = 1,
                    a = 0;
                for (this[e] = 255 & t; ++s < r && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                return e + r
            }, n.prototype.writeIntBE = function(t, e, r, i) {
                if (t *= 1, e >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r - 1);
                    v(this, t, e, r, i - 1, -i)
                }
                let s = r - 1,
                    o = 1,
                    a = 0;
                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o | 0) - a & 255;
                return e + r
            }, n.prototype.writeInt8 = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, n.prototype.writeInt16LE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, n.prototype.writeInt16BE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, n.prototype.writeInt32LE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 4, 0x7fffffff, -0x80000000), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, n.prototype.writeInt32BE = function(t, e, r) {
                return t *= 1, e >>>= 0, r || v(this, t, e, 4, 0x7fffffff, -0x80000000), t < 0 && (t = 0xffffffff + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, n.prototype.writeBigInt64LE = j(function(t, e = 0) {
                return D(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), n.prototype.writeBigInt64BE = j(function(t, e = 0) {
                return A(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), n.prototype.writeFloatLE = function(t, e, r) {
                return S(this, t, e, !0, r)
            }, n.prototype.writeFloatBE = function(t, e, r) {
                return S(this, t, e, !1, r)
            }, n.prototype.writeDoubleLE = function(t, e, r) {
                return N(this, t, e, !0, r)
            }, n.prototype.writeDoubleBE = function(t, e, r) {
                return N(this, t, e, !1, r)
            }, n.prototype.copy = function(t, e, r, i) {
                if (!n.isBuffer(t)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < r && (i = r), i === r || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (i < 0) throw RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
                let s = i - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, i) : Uint8Array.prototype.set.call(t, this.subarray(r, i), e), s
            }, n.prototype.fill = function(t, e, r, i) {
                let s;
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e, e = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                    if ("string" == typeof i && !n.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                    if (1 === t.length) {
                        let e = t.charCodeAt(0);
                        ("utf8" === i && e < 128 || "latin1" === i) && (t = e)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                if (r <= e) return this;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                    for (s = e; s < r; ++s) this[s] = t;
                else {
                    let o = n.isBuffer(t) ? t : n.from(t, i),
                        a = o.length;
                    if (0 === a) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (s = 0; s < r - e; ++s) this[s + e] = o[s % a]
                }
                return this
            };
            let P = {};

            function O(t, e, r) {
                P[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function R(t) {
                let e = "",
                    r = t.length,
                    i = +("-" === t[0]);
                for (; r >= i + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function b(t, e, r, i, s, o) {
                if (t > r || t < e) {
                    let i, s = "bigint" == typeof e ? "n" : "";
                    throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${s} and < 2${s} ** ${(o+1)*8}${s}` : `>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}` : `>= ${e}${s} and <= ${r}${s}`, new P.ERR_OUT_OF_RANGE("value", i, t)
                }
                w(s, "offset"), (void 0 === i[s] || void 0 === i[s + o]) && L(s, i.length - (o + 1))
            }

            function w(t, e) {
                if ("number" != typeof t) throw new P.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function L(t, e, r) {
                if (Math.floor(t) !== t) throw w(t, r), new P.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new P.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${e}`, t)
            }
            O("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), O("ERR_INVALID_ARG_TYPE", function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }, TypeError), O("ERR_OUT_OF_RANGE", function(t, e, r) {
                let i = `The value of "${t}" is out of range.`,
                    s = r;
                return Number.isInteger(r) && Math.abs(r) > 0x100000000 ? s = R(String(r)) : "bigint" == typeof r && (s = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (s = R(s)), s += "n"), i += ` It must be ${e}. Received ${s}`
            }, RangeError);
            let U = /[^+/0-9A-Za-z-_]/g;

            function V(t, e) {
                let r;
                e = e || 1 / 0;
                let i = t.length,
                    s = null,
                    o = [];
                for (let a = 0; a < i; ++a) {
                    if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!s) {
                            if (r > 56319 || a + 1 === i) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            s = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), s = r;
                            continue
                        }
                        r = (s - 55296 << 10 | r - 56320) + 65536
                    } else s && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (s = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function G(t) {
                return i.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(U, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function B(t, e, r, i) {
                let s;
                for (s = 0; s < i && !(s + r >= e.length) && !(s >= t.length); ++s) e[s + r] = t[s];
                return s
            }

            function k(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            let M = function() {
                let t = "0123456789abcdef",
                    e = Array(256);
                for (let r = 0; r < 16; ++r) {
                    let i = 16 * r;
                    for (let s = 0; s < 16; ++s) e[i + s] = t[r] + t[s]
                }
                return e
            }();

            function j(t) {
                return "u" < typeof BigInt ? q : t
            }

            function q() {
                throw Error("BigInt not supported")
            }
        },
        84810: (t, e, r) => {
            "use strict";
            var i = r(99742);
            let s = (t, e) => {
                    if (void 0 !== e) return e;
                    throw Error(`Env variable undefined: ${t}. Add it to any of .env files and rebuild project.`)
                },
                o = t => "true" === t;
            t.exports = {
                ConfigPublic: {
                    AppUrl: s("NEXT_PUBLIC_APP_URL", "https://displate.com"),
                    LogLevel: s("NEXT_PUBLIC_LOG_LEVEL", "warn"),
                    FbAppId: "486270291393982",
                    GtmId: s("NEXT_PUBLIC_GTM_ID", "GTM-W3XVJK"),
                    ArtworkDomain: s("NEXT_PUBLIC_ARTWORK_DOMAIN", "static.displate.com"),
                    UserContentDomain: s("NEXT_PUBLIC_USERCONTENT_DOMAIN", "usercontent.displate.com"),
                    VideoDomain: s("NEXT_PUBLIC_VIDEO_DOMAIN", "video.displate.com"),
                    VideoAdsDomain: s("NEXT_PUBLIC_VIDEOADS_DOMAIN", "videoads.displate.com"),
                    CmsDomain: s("NEXT_PUBLIC_CMS_DOMAIN", "cms-static-pages-assets.displate.com"),
                    CdnDomain: s("NEXT_PUBLIC_CDN_DOMAIN", "cdn.displate.com"),
                    VisualizationArtworkBaseUrl: s("NEXT_PUBLIC_VISUALIZATION_ARTWORK_BASE_URL", "visualization.displate.com/visualizations/facebook/share/artwork"),
                    PublicAssetProtocol: i.env.NEXT_PUBLIC_ASSETS_PROTOCOL ? ? "https",
                    PublicAssetsPrefix: s("NEXT_PUBLIC_ASSETS_PREFIX", "assets-static-prod.displate.com"),
                    TrustpilotBaseUrl: s("NEXT_PUBLIC_TRUSTPILOT_BASE_URL", "https://www.trustpilot.com"),
                    BuildVersion: "2.92.0-1c7ed034",
                    AthenaApi: s("NEXT_PUBLIC_ATHENA_API", "https://athena.displate.com"),
                    CustomerSupportBotId: s("NEXT_PUBLIC_CUSTOMER_SUPPORT_BOT_ID", "12660072"),
                    CookieConsentModeEnabled: s("NEXT_PUBLIC_COOKIE_CONSENT_ENABLED", o("true")),
                    CookieConsentModeTag: s("NEXT_PUBLIC_COOKIE_CONSENT_TAG", "v1.2.4"),
                    CookieConsentModeTagEu: s("NEXT_PUBLIC_COOKIE_CONSENT_TAG_EU", "v0.4.0"),
                    CookieConsentModeAssetsPrefix: s("NEXT_PUBLIC_COOKIE_CONSENT_ASSETS_PREFIX", "assets-static-prod.displate.com"),
                    OpenShopEnabled: s("NEXT_PUBLIC_OPEN_SHOP_ENABLED", o("false")),
                    AthenaCookieDomain: s("NEXT_PUBLIC_ATHENA_COOKIE_DOMAIN", ".displate.com"),
                    VerticalizationCookieDomain: s("NEXT_PUBLIC_VERTICALIZATION_COOKIE_DOMAIN", "displate.com"),
                    ProxyArtworks: o("NEXT_PUBLIC_PROXY_ARTWORKS", "false"),
                    TextraEnabled: o("true"),
                    NewRelicBrowserEnabled: o("true"),
                    NewRelicAppId: s("NEXT_PUBLIC_NEW_RELIC_APP_ID", "1044141292"),
                    NewRelicAgentId: s("NEXT_PUBLIC_NEW_RELIC_AGENT_ID", "1103304210"),
                    KlarnaClientIdEu: s("NEXT_PUBLIC_KLARNA_CLIENT_ID_EU", "klarna_live_client_ZiRUUGlNbUo3aGUpdUZNUFpZRkMoc0FMZihFMU5ITlgsOGQzMWIxZDMtMzRlOS00M2VjLWJkNzgtNGM1ZTlmMTExNzY4LDEsdFNFKy9WZlBzeEkyZjc2bUR6UGZWR0tPdDg4OHVkbEszeDFMZFBSSlR6RT0"),
                    KlarnaClientIdUs: s("NEXT_PUBLIC_KLARNA_CLIENT_ID_US", "klarna_live_client_cE8xQSlmP2NFYjFsZ2hiMkJWUGk_eWlzNi9WT0xoYSEsNjMyMjZiNzctNjk1OC00N2U2LThjNzEtOGY1YWRmZTY0MzFjLDEsTmx2RFNkRVNtZ0VwVWFLQlN0TkZtNmxLZXFCQlZSSFFVT2ovTFhWdk90TT0"),
                    KlarnaEnvironment: s("NEXT_PUBLIC_KLARNA_ENVIRONMENT", "production"),
                    KlarnaCountries: s("NEXT_PUBLIC_KLARNA_COUNTRIES", "US,DE,BE,NL,AT,FI".split(",") ? ? !1),
                    BazaarvoiceEnvironment: s("NEXT_PUBLIC_BAZAARVOICE_ENVIRONMENT", "production"),
                    BrazeEnabled: o("true"),
                    BrazeApiKey: s("NEXT_PUBLIC_BRAZE_SDK_API_KEY", "ff8a114f-3e23-4b93-a00f-6df2c81a21df"),
                    BrazeEndpoint: s("NEXT_PUBLIC_BRAZE_SDK_ENDPOINT", "sdk.fra-02.braze.eu"),
                    IsLocalEnvironment: o(i.env.NEXT_PUBLIC_IS_LOCAL_ENV),
                    GoogleClientId: s("NEXT_PUBLIC_GOOGLE_CLIENT_ID", "490149791077-a9sp6vn799n8t1bmr0qouqgmbo1ti84f.apps.googleusercontent.com"),
                    recaptchaV3SiteKey: s("NEXT_PUBLIC_RECAPTCHA_V3_PUBLIC_KEY", "6Lf5pb0pAAAAAK5iz1PNZOYasvbCQA0lGsQHmWwq"),
                    cookieDomain: s("NEXT_PUBLIC_ELYSIUM_COOKIE_DOMAIN", "displate.com"),
                    CustomerSupportBotTidioEnabled: o("true"),
                    AdyenClientKey: s("NEXT_PUBLIC_ADYEN_CLIENT_KEY", "live_2BVKHFSQBNFA5PXLPZCZVXLFHARDJCKO"),
                    AdyenEnvironment: s("NEXT_PUBLIC_ADYEN_ENVIRONMENT", "production"),
                    BraintreeEnvironment: s("NEXT_PUBLIC_BRAINTRREE_ENVIRONMENT", "PRODUCTION"),
                    GoogleMerchantId: s("NEXT_PUBLIC_GOOGLE_MERCHANT_ID", "08888275711281757001"),
                    GoogleMapsApiKey: s("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", "AIzaSyBjygq6iAT3xNTGS8nWtF-VgbzQsx-4sfA")
                },
                required: s,
                EnvAsBool: o
            }
        },
        87050: (t, e, r) => {
            "use strict";
            r.d(e, {
                Xt: () => tS,
                R6: () => ty,
                Ew: () => t_,
                hD: () => tD.h,
                JH: () => tN.J,
                DS: () => eI,
                V6: () => ev.V,
                $y: () => eD.$,
                kB: () => tA.k,
                Og: () => tP,
                cg: () => tO,
                C8: () => tR,
                MZ: () => tb,
                Fb: () => tw,
                gF: () => tL,
                kl: () => tU,
                XN: () => tV,
                jG: () => tG,
                j2: () => tk,
                Xb: () => tM,
                XH: () => tj,
                jD: () => tq,
                ab: () => tB,
                DT: () => tF,
                W$: () => tx,
                ro: () => tH,
                xq: () => tW,
                tT: () => tX,
                $1: () => tY,
                L: () => tK,
                WH: () => tz,
                wI: () => t$,
                p1: () => tZ,
                $F: () => tQ,
                lq: () => tJ,
                b_: () => t0,
                lL: () => t1,
                jt: () => t2,
                sL: () => t4,
                fj: () => t3,
                zu: () => t8,
                Ds: () => tC.D,
                R3: () => t6,
                eq: () => t5,
                _M: () => t9,
                tW: () => t7,
                dm: () => et,
                CY: () => ee,
                Qw: () => er,
                ao: () => ei,
                dV: () => es,
                bM: () => eo,
                or: () => ea.o,
                t: () => en,
                nO: () => eu,
                xB: () => el,
                XL: () => ec,
                Wu: () => ed,
                it: () => ep,
                zU: () => eh,
                ZU: () => em,
                QY: () => eE.Q,
                gK: () => ey,
                Uf: () => ef,
                bv: () => eg
            });
            var i, s, o, a, n, u, l, c, d, p, h, m, E, y, f, g, T, I, v, D, A, C, S, N, P, O, R, b, w, L, U, V, G, B, k, M, j, q, F, x, H, W, X, Y, K, z, $, Z, Q, J, tt, te, tr, ti, ts, to, ta, tn, tu, tl, tc, td, tp, th, tm, tE, ty, tf, tg, tT, tI, tv, tD = r(38564),
                tA = r(41177),
                tC = r(3806),
                tS = ((i = {}).MAGNET_3_PACK = "MAGNET_3_PACK", i.MAGNET_9_PACK = "MAGNET_9_PACK", i.MAGNET_3D = "MAGNET_3D", i.AMBIENT_LIGHT = "AMBIENT_LIGHT", i.HD_MOUNTING_SYSTEM = "HD_MOUNTING_SYSTEM", i.STAND = "STAND", i);
            (o = (s = ty || (ty = {})).strategy || (s.strategy = {})).CURRENT_CART = "current-cart", o.ORDER = "order", o.FLAT_PRICE = "flat-price", ((a = tf || (tf = {})).unit || (a.unit = {})).PCS = "pcs";
            var t_ = ((n = {}).WARNING = "WARNING", n.REJECT = "REJECT", n.FAILED = "FAILED", n.PENDING = "PENDING", n.IN_PROGRESS = "IN_PROGRESS", n.COMPLETED = "COMPLETED", n),
                tN = r(96207),
                tP = ((u = {}).DELIVERY_TIME = "delivery-time", u.RETURNS = "returns", u.ARTISTS = "artists", u),
                tO = ((l = {}).PROMO_CODE = "promo-code", l.DISPLATE_CLUB_MEMBERSHIP = "displate-club-membership", l.DISPLATE_CLUB_VOUCHER = "displate-club-voucher", l.GIFT_CARD = "gift-card", l),
                tR = ((c = {}).INFO = "info", c.WARNING = "warning", c.PRICE_DISCLAIMER = "price-disclaimer", c.GREEN_PULSOMETER = "green-pulsometer", c.ORANGE_PULSOMETER = "orange-pulsometer", c.RED_PULSOMETER = "red-pulsometer", c),
                tb = ((d = {}).INFO = "info", d.WARNING = "warning", d.ERROR = "error", d),
                tw = ((p = {}).CDN = "cdn", p.CDN_ASSETS = "cdn-assets", p.STATIC = "static", p),
                tL = ((h = {}).EXPRESS_CHECKOUT = "express-checkout", h.REGULAR_CHECKOUT = "regular-checkout", h.SUBSCRIPTION_UPDATE = "subscription-update", h),
                tU = ((m = {}).NEW = "NEW", m.PINNED = "PINNED", m),
                tV = ((E = {}).STD = "STD", E.DISPLAY = "DISPLAY", E),
                tG = ((y = {}).PUBLIC = "PUBLIC", y.HIDDEN = "HIDDEN", y),
                tB = ((f = {}).PUBLIC = "PUBLIC", f.HIDDEN = "HIDDEN", f),
                tk = ((g = {}).VERTICAL = "VERTICAL", g.HORIZONTAL = "HORIZONTAL", g.ALL = "ALL", g),
                tM = ((T = {}).CREATED = "CREATED", T),
                tj = ((I = {}).OWNED = "OWNED", I.WISHLIST = "WISHLIST", I.ALL = "ALL", I),
                tq = ((v = {}).PUBLIC = "PUBLIC", v.HIDDEN = "HIDDEN", v),
                tF = ((D = {}).PENDING = "pending", D.READY_TO_WITHDRAW = "ready to withdraw", D.CANCELED = "canceled", D.WITHDRAWN = "withdrawn", D),
                tx = ((A = {}).FOLLOW_AUTHOR = "FOLLOW_AUTHOR", A.NOTIFY_ME = "NOTIFY_ME", A),
                tH = ((C = {}).IMPOSSIBLE = "IMPOSSIBLE", C.NEEDED = "NEEDED", C.UNNECESSARY = "UNNECESSARY", C),
                tW = ((S = {}).ERR_CONTENT_ANALYSIS_FAILED = "ERR_CONTENT_ANALYSIS_FAILED", S.ERR_CONTENT_INVALID = "ERR_CONTENT_INVALID", S),
                tX = ((N = {}).PENDING = "PENDING", N.IN_PROGRESS = "IN_PROGRESS", N.ERROR = "ERROR", N.COMPLETED = "COMPLETED", N.SUCCESS = "SUCCESS", N),
                tY = ((P = {}).ORDER = "order", P.CURRENT_CART = "current-cart", P.LOWEST_POSSIBLE = "lowest-possible", P.FLAT_PRICE = "flat-price", P),
                tK = ((O = {}).OTHER = "OTHER", O.AVAILABLE = "AVAILABLE", O.COUNTRY_NOT_SUPPORTED = "COUNTRY_NOT_SUPPORTED", O.USER_IS_IN_DC = "USER_IS_IN_DC", O),
                tz = ((R = {}).NONE = "none", R.MATTE = "matte", R.GLOSS = "gloss", R.TEXTRA = "textra", R),
                t$ = ((b = {}).NONE = "none", b.GRAPHITE = "graphite", b.WHITE = "white", b.BLACK = "black", b.NATURAL = "natural", b),
                tZ = ((w = {}).NONE = "none", w.GRAPHITE = "graphite", w.WHITE = "white", w.BLACK = "black", w.NATURAL = "natural", w),
                tQ = ((L = {}).NONE = "NONE", L.TEXTRA = "TEXTRA", L.LIMITED_EDITION = "LIMITED_EDITION", L.ULTRA_LIMITED_EDITION = "ULTRA_LIMITED_EDITION", L.EXCLUSIVE = "EXCLUSIVE", L),
                tJ = ((U = {}).RAINBOW = "RAINBOW", U),
                t0 = ((V = {}).DARK = "DARK", V.LIGHT = "LIGHT", V),
                t1 = ((G = {}).ACTIVE = "active", G.SOLD_OUT = "sold_out", G.UPCOMING = "upcoming", G),
                t2 = ((B = {}).EVENT_EXCLUSIVE = "event_exclusive", B.ULTRA = "ultra", B.STANDARD = "standard", B),
                t4 = ((k = {}).STANDARD = "standard", k.HIGHLIGHTED = "highlighted", k.IMAGE_LINK = "image_link", k),
                t3 = ((M = {}).COLUMNS = "COLUMNS", M.IMAGES = "IMAGES", M),
                t8 = ((j = {})._3D_NORMALS = "3d-normals", j._3D_ROUGHNESS = "3d-roughness", j.COLOR_MAP = "color-map", j),
                t6 = ((q = {}).LUMINO_ITEM = "LUMINO_ITEM", q.LUMINO_LIST = "LUMINO_LIST", q.COLLECTION_PAGE = "COLLECTION_PAGE", q.BROWSE_COLLECTIONS_PAGE = "BROWSE_COLLECTIONS_PAGE", q.BROWSE_POSTERS = "BROWSE_POSTERS", q.BROWSE_POSTERS_TRENDING = "BROWSE_POSTERS_TRENDING", q.ARTIST_PAGE = "ARTIST_PAGE", q.HOMEPAGE = "HOMEPAGE", q.REGULAR_PDP = "REGULAR_PDP", q.CUSTOM_DISPLATE_PDP = "CUSTOM_DISPLATE_PDP", q.LIMITED_EDITION_PDP = "LIMITED_EDITION_PDP", q.LIMITED_EDITION_LIST = "LIMITED_EDITION_LIST", q.SEARCH = "SEARCH", q.BLOG = "BLOG", q.LISTING = "LISTING", q.LANDING_PAGE = "LANDING_PAGE", q.GIFT_CARD = "GIFT_CARD", q.BRANDS_ALL = "BRANDS_ALL", q.BRAND = "BRAND", q.ACCESSORIES = "ACCESSORIES", q.WHATS_A_DISPLATE = "WHATS_A_DISPLATE", q.COLLECTOR_PROFILE = "COLLECTOR_PROFILE", q.BUNDLE_PDP = "BUNDLE_PDP", q.BUNDLE_LISTING = "BUNDLE_LISTING", q),
                t5 = ((F = {}).VISA = "visa", F.MASTERCARD = "mastercard", F.DISCOVER = "discover", F.AMEX = "amex", F.PAYPAL = "paypal", F.PAYPAL_SECURE = "paypal_secure", F.KLARNA = "klarna", F.GPAY = "gpay", F.CUP = "cup", F.DINERS = "diners", F.BANK_TRANSFER = "bank_transfer", F.EPS = "eps", F.BCMC = "bcmc", F.TRUSTLY = "trustly", F.GIRO = "giro", F.IDEAL = "ideal", F.APPLE_PAY = "apple_pay", F);
            (H = (x = tg || (tg = {})).redirect || (x.redirect = {})).PAY_SUCCESS = "pay-success", H.DC_SUCCESS = "dc-success", (X = (W = tT || (tT = {})).redirect || (W.redirect = {})).PAY_SUCCESS = "pay-success", X.DC_SUCCESS = "dc-success", (K = (Y = tI || (tI = {})).redirect || (Y.redirect = {})).PAY_SUCCESS = "pay-success", K.DC_SUCCESS = "dc-success", r(3540);
            var t9 = ((z = {}).GIFT_CARD_V1 = "gift-card-v1", z.GIFT_CARD_V2 = "gift-card-v2", z.VOUCHER = "voucher", z.CREDIT_CARD = "credit-card", z.KLARNA = "klarna", z.KLARNA_ACCOUNT = "klarna-account", z.APPLEPAY = "applepay", z.GOOGLEPAY = "googlepay", z.BANK_TRANSFER = "bank-transfer", z.IDEAL = "ideal", z.EPS = "eps", z.TRUSTLY = "trustly", z.BANCONTACT = "bancontact", z.PAYPAL = "paypal", z),
                t7 = (($ = {}).START = "start", $.SUCCESS = "success", $.REFUSED = "refused", $.CANCELLED = "cancelled", $),
                et = ((Z = {}).BRAINTREE = "BRAINTREE", Z.PAYPAL = "PAYPAL", Z),
                ee = ((Q = {}).REGULAR = "regular", Q._3D_NORMALS = "3d-normals", Q._3D_ROUGHNESS = "3d-roughness", Q.COLOR_MAP = "color-map", Q),
                er = ((J = {}).FLAT = "flat", J.STEP = "step", J.SHIPPING = "shipping", J.CATEGORY = "category", J.COLLECTION = "collection", J.ARTIST = "artist", J.ITEM = "item", J.FORMAT = "format", J.AUTO_APPLIED_SHIPPING = "auto-applied-shipping", J),
                ei = ((tt = {}).TRENDING = "trending", tt.FOR_YOU = "for_you", tt),
                es = ((te = {}).NONE = "NONE", te.COPYRIGHT = "COPYRIGHT", te.ADULT_CONTENT = "ADULT_CONTENT", te.AESTHETIC_REQUIREMENTS_NOT_MET = "AESTHETIC_REQUIREMENTS_NOT_MET", te.OFFENSIVE_CONTENT = "OFFENSIVE_CONTENT", te.OTHER = "OTHER", te.UNKNOWN = "UNKNOWN", te.TECHNICAL_REQUIREMENTS_NOT_MET = "TECHNICAL_REQUIREMENTS_NOT_MET", te.QUALITY_ISSUES = "QUALITY_ISSUES", te.AI_ARTIFACTS = "AI_ARTIFACTS", te.SIMILAR = "SIMILAR", te.TOO_CLOSE_TO_THE_EDGE = "TOO_CLOSE_TO_THE_EDGE", te),
                eo = ((tr = {}).SR_ARTWORKS = "sr-artworks", tr.POSTERS = "posters", tr),
                ea = r(2064),
                en = ((ti = {}).M = "M", ti.L = "L", ti.XL = "XL", ti),
                eu = ((ts = {}).SMS = "SMS", ts.WHATSAPP = "WHATSAPP", ts),
                el = ((to = {}).ASC = "ASC", to.DESC = "DESC", to),
                ec = ((ta = {}).QUEUE_LIMIT = "QUEUE_LIMIT", ta.PHONE_VERIFICATION = "PHONE_VERIFICATION", ta.ADMIN_BLOCK = "ADMIN_BLOCK", ta),
                ed = ((tn = {}).ANIME = "anime", tn.OIL_PAINTING = "oil-painting", tn.COMICS = "comics", tn.FANTASY = "fantasy", tn.FUTURISTIC = "futuristic", tn.JAPANESE = "japanese", tn.RETRO = "retro", tn.WATERCOLOR = "watercolor", tn.PIXEL_ART = "pixel-art", tn.POP_ART = "pop-art", tn.TAROT_CARD = "tarot-card", tn.LO_FI = "lo-fi", tn),
                ep = ((tu = {}).SUCCESS = "SUCCESS", tu.ALREADY_ADDED = "ALREADY_ADDED", tu.FORMAT_ERROR = "FORMAT_ERROR", tu.UNKNOWN_ERROR = "UNKNOWN_ERROR", tu),
                eh = ((tl = {}).TIN_IDENTIFICATION_NUMBER = "TIN_IDENTIFICATION_NUMBER", tl.INSURANCE_NUMBER = "INSURANCE_NUMBER", tl.PASSPORT = "PASSPORT", tl.OFFICIAL_DOCUMENT = "OFFICIAL_DOCUMENT", tl.TAX_IDENTIFICATION_NUMBER = "TAX_IDENTIFICATION_NUMBER", tl.OTHER_DOCUMENT = "OTHER_DOCUMENT", tl),
                em = ((tc = {}).MATTE = "matte", tc.GLOSS = "gloss", tc.TEXTRA = "textra", tc);
            (tp = (td = tv || (tv = {})).strategy || (td.strategy = {})).CURRENT_CART = "current-cart", tp.ORDER = "order", tp.FLAT_PRICE = "flat-price";
            var eE = r(2994),
                ey = ((th = {}).HR = "HR", th.ORIGINAL = "ORIGINAL", th.BOTH = "BOTH", th.NONE = "NONE", th),
                ef = ((tm = {}).AWAITING_VALIDATION = "AWAITING_VALIDATION", tm.NOT_APPROVED = "NOT_APPROVED", tm.PUBLISHED = "PUBLISHED", tm.DEACTIVATED = "DEACTIVATED", tm),
                eg = ((tE = {}).PUBLIC = "PUBLIC", tE.HIDDEN = "HIDDEN", tE.ALL = "ALL", tE),
                eT = r(26986);
            class eI {
                static getAccountDescriptionV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/account/v1/description",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateArtistProfileV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/account/v1/description",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateArtistProfileImagesV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/account/v1/images",
                        formData: t,
                        mediaType: "multipart/form-data"
                    })
                }
                static getArtistAccountOnboardingV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/account/v1/onboarding",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getAccountDescriptionV2() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/account/v2/description",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateArtistProfileV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/account/v2/description",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateArtistProfileImagesV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/account/v2/images",
                        formData: t,
                        mediaType: "multipart/form-data"
                    })
                }
                static getAccountDescriptionV3() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/account/v3/description",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateAccountDescriptionV3(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/account/v3/description",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static checkMisspellingV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v1/misspelling",
                        query: {
                            phrase: t
                        }
                    })
                }
                static statusV1(t = 10, e = 1) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v1/status",
                        query: {
                            size: t,
                            page: e
                        }
                    })
                }
                static toBePublishedV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v1/to-be-published"
                    })
                }
                static checkMisspellingV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v2/misspelling",
                        query: {
                            phrases: t
                        }
                    })
                }
                static uploadArtworkV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/artwork/v2/upload",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getImageAnalysisV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v2/uploader/analysis/{processId}",
                        path: {
                            processId: t
                        }
                    })
                }
                static getArtistUploadInfoV3() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/artwork/v3/uploader-info"
                    })
                }
                static startAnalysisV3(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/artwork/v3/uploader/analysis",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static initUploadV3(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/artwork/v3/uploader/init",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static requestCommissionPaymentV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/earnings/v1/commission-payment",
                        body: t,
                        mediaType: "application/json"
                    })
                }
                static getCommissionStatusV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/earnings/v1/commission-status"
                    })
                }
                static getAccountArtworksV1(t, e, r = 10, i = 1) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/artworks",
                        query: {
                            sort: t,
                            status: e,
                            size: r,
                            page: i
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static deleteArtistsProfileArtworkV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "DELETE",
                        url: "/elysium-api/artist/v1/artworks/{externalId}",
                        path: {
                            externalId: t
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static updateArtworkV1(t, e) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/v1/artworks/{internalId}",
                        path: {
                            internalId: t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getArtistAssignableCollections() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/assignable-collections"
                    })
                }
                static getArtistCollections() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/collections"
                    })
                }
                static createArtistCollection(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/v1/collections",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            409: "Collection already exist"
                        }
                    })
                }
                static updateCollection(t, e) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/v1/collections/{collectionId}",
                        path: {
                            collectionId: t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist or not owner of the collection"
                        }
                    })
                }
                static deleteCollection(t) {
                    return (0, eT.E)(tC.D, {
                        method: "DELETE",
                        url: "/elysium-api/artist/v1/collections/{collectionId}",
                        path: {
                            collectionId: t
                        },
                        errors: {
                            403: "User is not an artist or not owner of the collection"
                        }
                    })
                }
                static getCommissionsV1(t, e, r = 10, i = 1) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/commissions",
                        query: {
                            period: t,
                            type: e,
                            size: r,
                            page: i
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getArtistCustomCollections() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/custom-collections"
                    })
                }
                static addArtworkToCustomCollection(t, e) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/v1/custom-collections/{collectionId}/artwork:assign",
                        path: {
                            collectionId: t
                        },
                        body: e,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist or not owner of the collection"
                        }
                    })
                }
                static getPayoutHistory() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/payouts"
                    })
                }
                static payoutCreateV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/v1/payouts",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getAccountSalesV1(t, e) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/sales",
                        query: {
                            period: t,
                            type: e
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getSalesReportV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/sales-reports",
                        query: {
                            period: t
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getAccountSalesSummaryV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/sales/summary",
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static getArtistTrendingTopicsV1() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v1/trending-topics"
                    })
                }
                static confirmPhoneCodeV1(t) {
                    return (0, eT.E)(tC.D, {
                        method: "PUT",
                        url: "/elysium-api/artist/v1/verifications/code",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            400: "Business error"
                        }
                    })
                }
                static getAccountCollectionsV2(t, e = 10, r = 1) {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v2/collections",
                        query: {
                            sort: t,
                            size: e,
                            page: r
                        },
                        errors: {
                            403: "User is not an artist"
                        }
                    })
                }
                static createArtistCollectionV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/v2/collections",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            409: "Collection already exist"
                        }
                    })
                }
                static getPayoutStatusV2() {
                    return (0, eT.E)(tC.D, {
                        method: "GET",
                        url: "/elysium-api/artist/v2/payouts/current"
                    })
                }
                static verifyPhoneV2(t) {
                    return (0, eT.E)(tC.D, {
                        method: "POST",
                        url: "/elysium-api/artist/v2/verifications/phone",
                        body: t,
                        mediaType: "application/json",
                        errors: {
                            400: "Business error"
                        }
                    })
                }
            }
            var ev = r(65971),
                eD = r(8341)
        },
        87247: (t, e) => {
            e.read = function(t, e, r, i, s) {
                var o, a, n = 8 * s - i - 1,
                    u = (1 << n) - 1,
                    l = u >> 1,
                    c = -7,
                    d = r ? s - 1 : 0,
                    p = r ? -1 : 1,
                    h = t[e + d];
                for (d += p, o = h & (1 << -c) - 1, h >>= -c, c += n; c > 0; o = 256 * o + t[e + d], d += p, c -= 8);
                for (a = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; a = 256 * a + t[e + d], d += p, c -= 8);
                if (0 === o) o = 1 - l;
                else {
                    if (o === u) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                    a += Math.pow(2, i), o -= l
                }
                return (h ? -1 : 1) * a * Math.pow(2, o - i)
            }, e.write = function(t, e, r, i, s, o) {
                var a, n, u, l = 8 * o - s - 1,
                    c = (1 << l) - 1,
                    d = c >> 1,
                    p = 5960464477539062e-23 * (23 === s),
                    h = i ? 0 : o - 1,
                    m = i ? 1 : -1,
                    E = +(e < 0 || 0 === e && 1 / e < 0);
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (n = +!!isNaN(e), a = c) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), a + d >= 1 ? e += p / u : e += p * Math.pow(2, 1 - d), e * u >= 2 && (a++, u /= 2), a + d >= c ? (n = 0, a = c) : a + d >= 1 ? (n = (e * u - 1) * Math.pow(2, s), a += d) : (n = e * Math.pow(2, d - 1) * Math.pow(2, s), a = 0)); s >= 8; t[r + h] = 255 & n, h += m, n /= 256, s -= 8);
                for (a = a << s | n, l += s; l > 0; t[r + h] = 255 & a, h += m, a /= 256, l -= 8);
                t[r + h - m] |= 128 * E
            }
        },
        96207: (t, e, r) => {
            "use strict";
            r.d(e, {
                J: () => s
            });
            var i, s = ((i = {}).HORIZONTAL = "horizontal", i.VERTICAL = "vertical", i)
        }
    },
    t => {
        var e = e => t(t.s = e);
        t.O(0, [6593, 8792], () => (e(92), e(59603))), _N_E = t.O()
    }
]);
//#