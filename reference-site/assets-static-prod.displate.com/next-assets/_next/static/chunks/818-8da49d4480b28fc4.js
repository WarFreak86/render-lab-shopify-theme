"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818], {
        26768: (o, i, e) => {
            e.d(i, {
                Kp: () => m,
                Mu: () => p,
                R_: () => s,
                pF: () => P
            });
            var t, a, n, r, s = ((t = {}).FREE_VIEW = "FREE_VIEW", t.SIDE_VIEW = "SIDE_VIEW", t.ZOOM = "ZOOM", t.ZOOM_VISUALIZATION = "ZOOM_VISUALIZATION", t),
                m = ((a = {})[a.NONE = 0] = "NONE", a[a.ROTATE = 1] = "ROTATE", a[a.TRUCK = 2] = "TRUCK", a[a.ZOOM = 16] = "ZOOM", a[a.TOUCH_TRUCK = 64] = "TOUCH_TRUCK", a[a.TOUCH_OFFSET = 128] = "TOUCH_OFFSET", a[a.TOUCH_DOLLY_TRUCK = 1024] = "TOUCH_DOLLY_TRUCK", a),
                p = ((n = {})[n.RESET = -1] = "RESET", n[n.LEAF = 0] = "LEAF", n[n.MAGNET = 1] = "MAGNET", n[n.QUALITY = 2] = "QUALITY", n[n.EDGES = 3] = "EDGES", n[n.METAL = 4] = "METAL", n),
                P = ((r = {}).DESKTOP = "desktop", r.MOBILE_OR_TABLET = "mobile_or_tablet", r)
        },
        30818: (o, i, e) => {
            e.d(i, {
                A: () => S
            });
            var t = e(8106),
                a = e(37473),
                n = e(26768);
            let r = {
                    dollySpeed: 3,
                    draggingSmoothTime: .1,
                    minCameraDistance: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: 4,
                            [a.or.L]: 6,
                            [a.or.XL]: 8
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: 4,
                            [a.or.L]: 6,
                            [a.or.XL]: 8
                        }
                    },
                    maxCameraDistance: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: 11,
                            [a.or.L]: 16.5,
                            [a.or.XL]: 22
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: 11,
                            [a.or.L]: 16.5,
                            [a.or.XL]: 22
                        }
                    },
                    minPan: null,
                    maxPan: null,
                    cameraPosition: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: [0, 0, 9, 0, -.35, 0],
                            [a.or.L]: [0, 0, 13.5, 0, -.55, 0],
                            [a.or.XL]: [0, 0, 18.2, 0, -.7, 0]
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: [0, 0, 7.5, 0, 0, 0],
                            [a.or.L]: [0, 0, 11.3, 0, 0, 0],
                            [a.or.XL]: [0, 0, 15, 0, 0, 0]
                        }
                    },
                    initialCameraPosition: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: [0, 0, 13.2, 0, -1.38, 0],
                            [a.or.L]: [0, 0, 13.2, 0, -1.38, 0],
                            [a.or.XL]: [0, 0, 13.2, 0, -1.38, 0]
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: [0, 0, 12.45, 0, -.86, 0],
                            [a.or.L]: [0, 0, 12.45, 0, -.86, 0],
                            [a.or.XL]: [0, 0, 12.45, 0, -.86, 0]
                        }
                    },
                    mountingVisible: !1,
                    mouseButtons: {
                        left: n.Kp.ROTATE,
                        middle: n.Kp.NONE,
                        right: n.Kp.NONE,
                        wheel: n.Kp.ZOOM
                    },
                    touches: {
                        one: n.Kp.TOUCH_TRUCK,
                        two: n.Kp.TOUCH_DOLLY_TRUCK,
                        three: n.Kp.TOUCH_DOLLY_TRUCK
                    },
                    stages: null,
                    mountingsElements: null,
                    transitionDelay: 0
                },
                s = [{
                    id: n.Mu.LEAF,
                    name: "Leaf",
                    titleText: "Leaf",
                    descriptionText: "It’s safe for your walls and super easy to peel off!"
                }, {
                    id: n.Mu.MAGNET,
                    name: "Magnet",
                    titleText: "Magnet",
                    descriptionText: "Super slim and extra strong for secure mounting."
                }, {
                    id: n.Mu.QUALITY,
                    name: "Quality",
                    titleText: "Quality",
                    descriptionText: "Manufactured & quality-checked by skilled craftsmen."
                }, {
                    id: n.Mu.EDGES,
                    name: "Edges",
                    titleText: "Edges",
                    descriptionText: "Soft and smoothly bent to keep your fingers safe."
                }, {
                    id: n.Mu.METAL,
                    name: "Metal",
                    titleText: "Metal",
                    descriptionText: "Top quality, modern look, and increased durability."
                }],
                m = [{ ...s[0],
                    cameraPosition: [-5.550336837914945, -.0617338596875138, .04857871521969859, -1.2557020308070135, -.01905127109792479, -4.801379020107538],
                    position: [-1.7, 0, -4.37]
                }, { ...s[1],
                    cameraPosition: [-4.44558005076324, .011601031034761802, -.3547390373736605, -1.2953816941641514, .05932483562941627, -2.819282149708158],
                    position: [-1.7, 0, -2.17]
                }, { ...s[2],
                    cameraPosition: [-2.0678395400608296, 3.0541224838162346, -4.668148847786498, .14812462699226853, .6271216309792591, .15078688859920822],
                    position: [.9, 1, -.1]
                }, { ...s[3],
                    cameraPosition: [-5.585376563071433, -3.7675535275462693, .33791909186176755, .06798114677123732, -.4401422372232389, -.04427650530269534],
                    position: [-3.5, -2.22, -.03]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.4274976142492738, 3.0145477032873376, .01348978437509941, .20430659882179822, -.016334395127802187],
                    position: [-.5, 0, .1]
                }],
                p = [{ ...s[0],
                    cameraPosition: [-5.550336837914945, -.0617338596875138, .04857871521969859, -1.2557020308070135, -.01905127109792479, -4.801379020107538],
                    position: [-1.7, 0, -4.37]
                }, { ...s[1],
                    cameraPosition: [-4.44558005076324, .011601031034761802, -.3547390373736605, -.2953816941641514, .05932483562941627, -2.819282149708158],
                    position: [-1.7, 0, -2.17]
                }, { ...s[2],
                    cameraPosition: [-2.157816573587278, 2.47652781064645, -3.174808959147542, .7834859051102505, .6052605668060379, -.04997071880423801],
                    position: [.7, .9, -.1]
                }, { ...s[3],
                    cameraPosition: [-5.585376563071433, -3.7675535275462693, .5379190918617675, .06798114677123732, -.4401422372232389, -.04427650530269534],
                    position: [-3.7, -2.15, .02]
                }, { ...s[4],
                    cameraPosition: [-3.497027714171495, 1.1490881480814057, 2.9272668753090874, -.3808140692783937, -.030695477519649232, -1.0993789670662042],
                    position: [-1.5, 0, .1]
                }],
                P = [{ ...s[0],
                    cameraPosition: [-3.9898443642576433, -.19694153266313283, .3955428606115623, -.7375306205608753, .0794615380516466, -1.9166112551559298],
                    position: [0, 0, -2.9]
                }, { ...s[1],
                    cameraPosition: [-3.0065704034588654, .3784445484713159, .13672420110948336, -.5481867944102181, .06405597780604873, -1.553692865000534],
                    position: [0, 0, -1.4]
                }, { ...s[2],
                    cameraPosition: [-1.9070084395226117, 1.668200496710143, -3.0285737939201383, .3649817414422049, .4096811089383937, .013496154026831292],
                    position: [.5, .7, -.1]
                }, { ...s[3],
                    cameraPosition: [-4.3752002871153515, -1.9686707594754107, .45075454453001745, -.22057537620684795, -.014567918066206692, -.295358388433889],
                    position: [-2.3, -1.45, -.03]
                }, { ...s[4],
                    cameraPosition: [-1.847930700941005, .39792819197862406, 3.327044656069109, -.20419835607007036, .15258727667538327, -.2992415747730352],
                    position: [-.5, 0, .1]
                }],
                E = [{ ...s[0],
                    cameraPosition: [-3.9898443642576433, -.19694153266313283, .3955428606115623, -.7375306205608753, .0794615380516466, -1.9166112551559298],
                    position: [0, 0, -2.9]
                }, { ...s[1],
                    cameraPosition: [-3.0065704034588654, .3784445484713159, .13672420110948336, -.5481867944102181, .06405597780604873, -1.553692865000534],
                    position: [-.8, 0, -1.4]
                }, { ...s[2],
                    cameraPosition: [-2.0716005080889714, 1.4105898482096237, -2.4370363989246786, .2481454663994482, .5539946263326483, -.06332711126427477],
                    position: [.27, .7, -.1]
                }, { ...s[3],
                    cameraPosition: [-3.952120033062101, -2.706852347691613, .3238870017792665, -.685710175874013, -.5375723095089846, -.4665500676999366],
                    position: [-2.3, -1.4, -.03]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.5274976142492738, 5.014547703287337, .1134897843750994, .20430659882179822, -.016334395127802187],
                    position: [0, 0, .1]
                }],
                l = [{ ...s[0],
                    cameraPosition: [-6.441893229839389, 1.5861898823540481, -.8837095926825072, -2.071709067773813, 2.1690551208778217, -4.951129044583452],
                    position: [-2.7, 1.9, -4.38]
                }, { ...s[1],
                    cameraPosition: [-6.276202737362651, 2.254946369093668, -.5218257203860444, -1.06742644148087, 1.5826421919736993, -3.210063602725184],
                    position: [-2.7, 1.9, -2.18]
                }, { ...s[2],
                    cameraPosition: [-5.41794737767889, 3.4166610609968386, -3.668652454804765, -.5863493706225585, 1.0955655179054364, 1.1749852668050123],
                    position: [-2, 2.1, -.1]
                }, { ...s[3],
                    cameraPosition: [-6.867159187921308, -1.3441924005859744, .9805215354911436, -.5680887519332374, 1.3297400279137424, -1.1867914705462435],
                    position: [-4.6, .15, -.03]
                }, { ...s[4],
                    cameraPosition: [-3.372984442278086, .7132390156287547, 3.209982480469185, -1.6935487397636215, 1.2874480129803143, -1.3322711377434646],
                    position: [-2.3, 1.1, .1]
                }],
                c = [{ ...s[0],
                    cameraPosition: [-6.441893229839389, 1.5861898823540481, -.8837095926825072, -2.071709067773813, 2.1690551208778217, -4.951129044583452],
                    position: [-2.7, 1.9, -4.38]
                }, { ...s[1],
                    cameraPosition: [-6.276202737362651, 2.254946369093668, -.5218257203860444, -1.06742644148087, 1.5826421919736993, -3.210063602725184],
                    position: [-2.7, 1.9, -2.18]
                }, { ...s[2],
                    cameraPosition: [-5.293203041467935, -.07726797696963605, -3.775951453491841, -1.175334678890579, -1.551006125414455, 1.01381604730298],
                    position: [-2.1, -1.2, -.1]
                }, { ...s[3],
                    cameraPosition: [-6.867159187921308, -1.3441924005859744, .9805215354911436, -.5680887519332374, 1.3297400279137424, -1.1867914705462435],
                    position: [-4.6, -0, .05]
                }, { ...s[4],
                    cameraPosition: [-3.372984442278086, .7132390156287547, 7.209982480469185, -1.6935487397636215, 1.2874480129803143, -1.3322711377434646],
                    position: [-2.3, 1.5, .1]
                }],
                T = [{ ...s[0],
                    cameraPosition: [-2.6796610706921653, 1.5917299683746013, -.3895616361627319, -.7701976055362982, 1.6327583450602097, -2.7772455855464546],
                    position: [0, 1.7, -3.97]
                }, { ...s[1],
                    cameraPosition: [-3.0505462219064023, 1.6028470775962598, .23001099798482594, -.5493213300229175, 1.6239306552663992, -1.4263191390878163],
                    position: [0, 1.7, -1.97]
                }, { ...s[2],
                    cameraPosition: [-3.6972905731009407, -1.858447815314492, -4.571628371353264, -.09725306771165307, -1.1142455208544149, .2001301717995266],
                    position: [.25, -1.3, -.1]
                }, { ...s[3],
                    cameraPosition: [-3.882702528988837, -3.837236482310331, .4164119380787653, .020372287605591254, -2.496593755992686, -.5005083898582652],
                    position: [-2.7, -3.2, .05]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.4274976142492738, 3.0145477032873376, .01348978437509941, .20430659882179822, -.016334395127802187],
                    position: [0, .5, .1]
                }],
                L = [{ ...s[0],
                    cameraPosition: [-2.6796610706921653, 1.5917299683746013, -.3895616361627319, -.7701976055362982, 1.6327583450602097, -2.7772455855464546],
                    position: [0, 1.7, -3.97]
                }, { ...s[1],
                    cameraPosition: [-3.0505462219064023, 1.6028470775962598, .23001099798482594, -.5493213300229175, 1.6239306552663992, -1.4263191390878163],
                    position: [0, 1.7, -1.97]
                }, { ...s[2],
                    cameraPosition: [-3.6972905731009407, -1.858447815314492, -4.571628371353264, -.09725306771165307, -1.1142455208544149, .2001301717995266],
                    position: [.3, -1.5, -.1]
                }, { ...s[3],
                    cameraPosition: [-3.882702528988837, -3.837236482310331, .4164119380787653, .020372287605591254, -2.496593755992686, -.5005083898582652],
                    position: [-1.6, -3, .05]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.4274976142492738, 9.01454770328733, .01348978437509941, .20430659882179822, -.016334395127802187],
                    position: [0, 1, .1]
                }],
                O = [{ ...s[0],
                    cameraPosition: [-3.232968590021215, -.15658919546076305, .4535235274038678, -.8132969328807268, -.04928749354907899, -1.4713263722641505],
                    position: [0, 0, -2.9]
                }, { ...s[1],
                    cameraPosition: [-3.049383454631286, -.04182737466231745, .4252870537104084, -.3570127622426195, .07127709773147131, -.893176989444009],
                    position: [0, 0, -1.4]
                }, { ...s[2],
                    cameraPosition: [-2.2644372306651475, -1.4100888827680749, -3.3212393598418224, -.010032940287294297, -.7683455487778975, -.25576368894640844],
                    position: [.2, -.9, -.1]
                }, { ...s[3],
                    cameraPosition: [-2.7113241661808924, -2.716223569548704, .23792066791717043, .12885675774641658, -1.1501686471971915, -.4543087129436559],
                    position: [-1.8, -2.1, .02]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.4274976142492738, 3.0145477032873376, .01348978437509941, .20430659882179822, -.016334395127802187],
                    position: [0, .5, .1]
                }],
                u = [{ ...s[0],
                    cameraPosition: [-2.232968590021215, -.15658919546076305, .4535235274038678, -.8132969328807268, -.04928749354907899, -1.4713263722641505],
                    position: [0, 0, -2.9]
                }, { ...s[1],
                    cameraPosition: [-3.049383454631286, -.04182737466231745, .4252870537104084, -.3570127622426195, .07127709773147131, -.893176989444009],
                    position: [0, 0, -1.4]
                }, { ...s[2],
                    cameraPosition: [-2.9914705531142043, -.5375871423442817, -2.7648924264109382, -.14433715460818564, -.9281111416284736, .017430778591430128],
                    position: [0, -1, -.1]
                }, { ...s[3],
                    cameraPosition: [-2.7113241661808924, -2.716223569548704, .23792066791717043, .12885675774641658, -1.1501686471971915, -.4543087129436559],
                    position: [-1.5, -2, .05]
                }, { ...s[4],
                    cameraPosition: [-1.0010564405339564, -.4274976142492738, 6.014547703287337, .01348978437509941, .20430659882179822, -.016334395127802187],
                    position: [0, 0, .1]
                }],
                d = [{ ...s[0],
                    cameraPosition: [-4.332205691435745, 2.7039164002612828, -.8612926797731006, -2.398065764169872, 2.6674130715943516, -3.15427550760941],
                    position: [-2, 2.7, -4.38]
                }, { ...s[1],
                    cameraPosition: [-4.026901474792199, 2.6935357393170536, .31643471938157086, -.9740474744835769, 2.7573252732037186, -2.3222324236266543],
                    position: [-2, 2.7, -2.18]
                }, { ...s[2],
                    cameraPosition: [-3.6719500675025927, -3.228291524614503, -3.3333917314588257, -.5874986733868324, -2.8095178684581157, 1.576405211609587],
                    position: [-1.5, -3.2, -.1]
                }, { ...s[3],
                    cameraPosition: [-4.26803063370053, -.4462489348355697, .5064713106209482, -.006263017487386409, .732636628156239, -1.38540993064235],
                    position: [-3.3, -.3, .05]
                }, { ...s[4],
                    cameraPosition: [-3.372984442278086, .7132390156287547, 3.209982480469185, -1.6935487397636215, 1.2874480129803143, -1.3322711377434646],
                    position: [-2, 1, .1]
                }],
                M = [{ ...s[0],
                    cameraPosition: [-4.332205691435745, 2.7039164002612828, -.8612926797731006, -2.398065764169872, 2.6674130715943516, -3.15427550760941],
                    position: [-2, 2.7, -4.38]
                }, { ...s[1],
                    cameraPosition: [-4.026901474792199, 2.6935357393170536, .31643471938157086, -1.574047474483576, 2.7573252732037186, -2.3222324236266543],
                    position: [-2, 2.7, -2.18]
                }, { ...s[2],
                    cameraPosition: [-4.861058903956774, -3.014205473744396, -3.0319958758063725, -.6089167580895357, -2.9426150916413363, .6833802787121087],
                    position: [-1.5, -3.2, -.1]
                }, { ...s[3],
                    cameraPosition: [-4.26803063370053, -.4462489348355697, .5064713106209482, -.006263017487386409, .732636628156239, -1.38540993064235],
                    position: [-3.3, -.3, .05]
                }, { ...s[4],
                    cameraPosition: [-3.372984442278086, .7132390156287547, 6.209982480469185, -1.6935487397636215, 1.2874480129803143, -1.3322711377434646],
                    position: [-2, 1, .1]
                }];
            var _ = e(87050);
            let R = {
                dollySpeed: 3,
                draggingSmoothTime: .1,
                minCameraDistance: {
                    [n.pF.MOBILE_OR_TABLET]: {
                        [a.or.M]: 3,
                        [a.or.L]: 3,
                        [a.or.XL]: 3
                    },
                    [n.pF.DESKTOP]: {
                        [a.or.M]: 3,
                        [a.or.L]: 3,
                        [a.or.XL]: 3
                    }
                },
                maxCameraDistance: {
                    [n.pF.MOBILE_OR_TABLET]: {
                        [a.or.M]: 10,
                        [a.or.L]: 10,
                        [a.or.XL]: 10
                    },
                    [n.pF.DESKTOP]: {
                        [a.or.M]: 10,
                        [a.or.L]: 10,
                        [a.or.XL]: 10
                    }
                },
                minPan: null,
                maxPan: null,
                cameraPosition: {
                    [n.pF.MOBILE_OR_TABLET]: {
                        [a.or.M]: [-9.497328259081819, -.7156388931046946, 5.047723234468941, -2, -.6, 0],
                        [a.or.L]: [-14.497328259081819, -.7156388931046946, 6.047723234468941, -3, -.6, 0],
                        [a.or.XL]: [-20.49732825908182, -.7156388931046946, 7.047723234468941, -4.4, -1, 0]
                    },
                    [n.pF.DESKTOP]: {
                        [a.or.M]: [-9.497328259081819, -.7156388931046946, 3.047723234468941, -2, -.1, 0],
                        [a.or.L]: [-12.497328259081819, -.7156388931046946, 3.047723234468941, -3, -.15, 0],
                        [a.or.XL]: [-17.49732825908182, -.7156388931046946, 3.047723234468941, -4.4, -.15, 0]
                    }
                },
                initialCameraPosition: null,
                mountingVisible: !0,
                mouseButtons: {
                    left: n.Kp.NONE,
                    middle: n.Kp.NONE,
                    right: n.Kp.NONE,
                    wheel: n.Kp.NONE
                },
                touches: {
                    one: n.Kp.NONE,
                    two: n.Kp.NONE,
                    three: n.Kp.NONE
                },
                stages: {
                    [n.pF.MOBILE_OR_TABLET]: {
                        [_.JH.VERTICAL]: {
                            [a.or.M]: u,
                            [a.or.L]: L,
                            [a.or.XL]: M
                        },
                        [_.JH.HORIZONTAL]: {
                            [a.or.M]: E,
                            [a.or.L]: p,
                            [a.or.XL]: c
                        }
                    },
                    [n.pF.DESKTOP]: {
                        [_.JH.VERTICAL]: {
                            [a.or.M]: O,
                            [a.or.L]: T,
                            [a.or.XL]: d
                        },
                        [_.JH.HORIZONTAL]: {
                            [a.or.M]: P,
                            [a.or.L]: m,
                            [a.or.XL]: l
                        }
                    }
                },
                mountingsElements: {
                    [_.JH.HORIZONTAL]: {
                        [a.or.M]: [{
                            leafPosition: [0, 0, -3],
                            magnetPosition: [0, 0, -1.5]
                        }],
                        [a.or.L]: [{
                            leafPosition: [1.7, 0, -4.4],
                            magnetPosition: [1.7, 0, -2.2]
                        }, {
                            leafPosition: [-1.7, 0, -4.4],
                            magnetPosition: [-1.7, 0, -2.2]
                        }],
                        [a.or.XL]: [{
                            leafPosition: [-2.7, -1.9, -4.4],
                            magnetPosition: [-2.7, -1.9, -2.2]
                        }, {
                            leafPosition: [-2.7, 1.9, -4.4],
                            magnetPosition: [-2.7, 1.9, -2.2]
                        }, {
                            leafPosition: [2.7, 1.9, -4.4],
                            magnetPosition: [2.7, 1.9, -2.2]
                        }, {
                            leafPosition: [2.7, -1.9, -4.4],
                            magnetPosition: [2.7, -1.9, -2.2]
                        }]
                    },
                    [_.JH.VERTICAL]: {
                        [a.or.M]: [{
                            leafPosition: [0, 0, -3],
                            magnetPosition: [0, 0, -1.5]
                        }],
                        [a.or.L]: [{
                            leafPosition: [0, -1.7, -4],
                            magnetPosition: [0, -1.7, -2]
                        }, {
                            leafPosition: [0, 1.7, -4],
                            magnetPosition: [0, 1.7, -2]
                        }],
                        [a.or.XL]: [{
                            leafPosition: [-1.9, -2.7, -4.4],
                            magnetPosition: [-1.9, -2.7, -2.2]
                        }, {
                            leafPosition: [-1.9, 2.7, -4.4],
                            magnetPosition: [-1.9, 2.7, -2.2]
                        }, {
                            leafPosition: [1.9, 2.7, -4.4],
                            magnetPosition: [1.9, 2.7, -2.2]
                        }, {
                            leafPosition: [1.9, -2.7, -4.4],
                            magnetPosition: [1.9, -2.7, -2.2]
                        }]
                    }
                },
                transitionDelay: 200
            };
            var g = e(66691);
            let I = {
                    dollySpeed: 3,
                    draggingSmoothTime: .1,
                    minCameraDistance: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: 3,
                            [a.or.L]: 3,
                            [a.or.XL]: 3
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: 2,
                            [a.or.L]: 2,
                            [a.or.XL]: 2
                        }
                    },
                    maxCameraDistance: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: 10,
                            [a.or.L]: 10,
                            [a.or.XL]: 10
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: 7,
                            [a.or.L]: 7,
                            [a.or.XL]: 7
                        }
                    },
                    minPan: {
                        [n.pF.MOBILE_OR_TABLET]: new g.Pq0(-1.5, -1.5, -1.5),
                        [n.pF.DESKTOP]: new g.Pq0(-2.5, -2.5, -2.5)
                    },
                    maxPan: {
                        [n.pF.MOBILE_OR_TABLET]: new g.Pq0(1.5, 1.5, 1.5),
                        [n.pF.DESKTOP]: new g.Pq0(2.5, 2.5, 2.5)
                    },
                    cameraPosition: {
                        [n.pF.MOBILE_OR_TABLET]: {
                            [a.or.M]: [0, 0, 10, 0, 0, 0],
                            [a.or.L]: [0, 0, 10, 0, 0, 0],
                            [a.or.XL]: [0, 0, 10, 0, 0, 0]
                        },
                        [n.pF.DESKTOP]: {
                            [a.or.M]: [0, 0, 7, 0, 0, 0],
                            [a.or.L]: [0, 0, 7, 0, 0, 0],
                            [a.or.XL]: [0, 0, 7, 0, 0, 0]
                        }
                    },
                    initialCameraPosition: null,
                    mountingVisible: !1,
                    mouseButtons: {
                        left: n.Kp.TRUCK,
                        middle: n.Kp.NONE,
                        right: n.Kp.NONE,
                        wheel: n.Kp.ZOOM
                    },
                    touches: {
                        one: n.Kp.TOUCH_OFFSET,
                        two: n.Kp.TOUCH_DOLLY_TRUCK,
                        three: n.Kp.TOUCH_DOLLY_TRUCK
                    },
                    stages: null,
                    mountingsElements: null,
                    transitionDelay: 0
                },
                C = {
                    cameraMode: n.R_.FREE_VIEW,
                    currentCameraStage: n.Mu.RESET,
                    previousCameraMode: n.R_.FREE_VIEW,
                    shouldRenderPresentation: !1,
                    isPresentationRendered: !1,
                    isPresentationError: !1,
                    supportedImageFormats: [],
                    zoomPopupRef: null,
                    usedTextIndices: [],
                    isInitialLightAnimationTriggered: !0,
                    areFrontMaterialsUpdated: !1,
                    shouldExportScene: !1,
                    exportedScene: null
                },
                S = (0, t.v)((o, i) => ({ ...C,
                    setPresentationError: i => o(o => ({ ...o,
                        isPresentationError: i
                    })),
                    handleCameraMode: e => (e !== n.R_.SIDE_VIEW && i().resetCurrentCameraStage(), o({
                        previousCameraMode: i().cameraMode
                    }), o({
                        cameraMode: e
                    })),
                    resetCurrentCameraStage: () => o({
                        currentCameraStage: n.Mu.RESET
                    }),
                    updateCurrentCameraStage: i => o({
                        currentCameraStage: i
                    }),
                    setShouldRenderPresentation: i => o(o => ({ ...o,
                        shouldRenderPresentation: i
                    })),
                    setIsPresentationRendered: i => o(o => ({ ...o,
                        isPresentationRendered: i
                    })),
                    getSettingsForCameraMode: () => {
                        switch (i().cameraMode) {
                            case n.R_.FREE_VIEW:
                                return r;
                            case n.R_.ZOOM:
                                return I;
                            case n.R_.SIDE_VIEW:
                                return R;
                            default:
                                return r
                        }
                    },
                    getCameraPosition: (o, e, t) => {
                        let a = i().cameraMode,
                            s = i().currentCameraStage;
                        switch (a) {
                            case n.R_.FREE_VIEW:
                                return r.cameraPosition[t][o];
                            case n.R_.ZOOM:
                                return I.cameraPosition[t][o];
                            case n.R_.SIDE_VIEW:
                                if (!R.stages) return [0, 0, 0, 0, 0, 0];
                                return s < 0 ? R.cameraPosition[t][o] : R.stages[t][e][o][s].cameraPosition;
                            default:
                                return r.cameraPosition[t][o]
                        }
                    },
                    getInitialCameraPosition: (o, e) => {
                        switch (i().cameraMode) {
                            case n.R_.FREE_VIEW:
                                if (r.initialCameraPosition) return r.initialCameraPosition[e][o];
                                return null;
                            case n.R_.ZOOM:
                                if (I.initialCameraPosition) return I.initialCameraPosition[e][o];
                                return null;
                            case n.R_.SIDE_VIEW:
                                if (R.initialCameraPosition) return R.initialCameraPosition[e][o];
                                return null;
                            default:
                                if (r.initialCameraPosition) return r.initialCameraPosition[e][o];
                                return null
                        }
                    },
                    getMountingPosition: (o, e) => {
                        switch (i().cameraMode) {
                            case n.R_.FREE_VIEW:
                            case n.R_.ZOOM:
                                return null;
                            case n.R_.SIDE_VIEW:
                                if (R.mountingsElements) return R.mountingsElements[e][o];
                                return null;
                            default:
                                return null
                        }
                    },
                    setSupportedImageFormats: i => o(o => ({ ...o,
                        supportedImageFormats: [...i]
                    })),
                    setZoomPopupRef: i => o(o => ({ ...o,
                        zoomPopupRef: i
                    })),
                    setUsedTextIndices: i => o(o => ({ ...o,
                        usedTextIndices: [...i]
                    })),
                    setIsInitialLightAnimationTriggered: i => o(o => ({ ...o,
                        isInitialLightAnimationTriggered: i
                    })),
                    setAreFrontMaterialsUpdated: i => o(o => ({ ...o,
                        areFrontMaterialsUpdated: i
                    })),
                    setShouldExportScene: i => o(o => ({ ...o,
                        shouldExportScene: i
                    })),
                    setExportedScene: i => o(o => ({ ...o,
                        exportedScene: i
                    })),
                    reset: () => {
                        o(o => ({ ...{ ...C,
                                usedTextIndices: o.usedTextIndices
                            }
                        }))
                    }
                }))
        }
    }
]);
//#