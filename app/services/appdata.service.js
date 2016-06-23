System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppDataService = (function () {
                function AppDataService(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead.jpg",
                            alt: "test",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
                            image: './public/images/banner.jpg',
                            ctaText: 'Learn More'
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "Buying Guide",
                                    desc: "What to look for when buying",
                                    cta: "Click Here",
                                    link: "http://blog.whirlpool.ca/whirlpool-refrigerator-buying-guide/",
                                    type: "cart"
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Ratings and Reviews",
                                    alt: "Ratings and Reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html#Ovens",
                                    type: "star"
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Find Your Whirlpool",
                                    alt: "Find Your Whirlpool",
                                    desc: "Need help finding your range?",
                                    cta: "Click Here",
                                    link: "http://findmy.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Additional Features",
                            features: [
                                {
                                    title: "FlexHeat<sup>&trade;</sup> Element",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "The FlexHeat™ element is like having two or three elements in one. A 6\" inner ring is great for smaller pots and pans, while expandable outer rings make room to heat larger cookware.",
                                    cta: ""
                                },
                                {
                                    title: "Temperature Sensor",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Kitchen_Accessories_Oven__Range-3/102280109/",
                                    alt: "test",
                                    text: "A built-in sensor monitors oven temperature and controls the cooking elements to deliver consistent, delicious results every time.",
                                    cta: ""
                                },
                                {
                                    title: "FIT System Guarantee",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "/other-assets/en_CA/pdf/WHR_FIT_Front Control_Guarantee_2016_EN.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Must-See Innovation",
                            videos: [
                                {
                                    id: 'GO_B6SOOaHU',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Electric and Gas Ranges',
                                    alt: "Electric and Gas Ranges",
                                    ctaTitle: 'Electric and Gas Ranges',
                                    cta: 'Play Video',
                                    desc: 'Get dinner on the table quickly and a few minutes back in your day to keep it moving. Thanks to ranges from the brand with the time saver system.'
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Frozen Bake<sup>&trade;</sup> Technology',
                                    alt: "Frozen Bake Technology",
                                    ctaTitle: 'Frozen Bake<sup>&trade;</sup> Technology',
                                    cta: 'View',
                                    desc: 'Frozen Bake<sup>&trade;</sup> technology cooks frozen foods faster2 by eliminating the need to preheat the oven. Just select the food type, temperature and cook time listed on the frozen item\'s package and the oven will start customizing',
                                },
                                {
                                    image: './public/images/video-thumb-3.jpg',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Fan Convection Cooking',
                                    alt: "Fan Convection Cooking",
                                    ctaTitle: 'Fan Convection Cooking',
                                    cta: 'View',
                                    desc: 'Bake on any rack with fan convection cooking. It fills the entire oven with heat, so no matter which rack you use, you still get great results.'
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose Your Style',
                            nav: {
                                text: 'See<br/>All',
                                link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003/'
                            },
                            products: [
                                {
                                    image: "./public/images/products/fcr.png",
                                    thumb: "./public/images/products/thumbs/fcr.png",
                                    title: "Front Control Ranges",
                                    alt: "Front Control Ranges",
                                    desc: "Front Control gives everyone in your home safer and easier access to controls, while providing a built-in look that fits seamlessly into every kitchen. Since the sides are finished, it looks great at the end of the countertop run too.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+10000151/",
                                    id: "front-control-ranges",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/rcr.png",
                                    thumb: "./public/images/products/thumbs/rcr.png",
                                    title: "Rear Control Ranges",
                                    alt: "Rear Control Ranges",
                                    desc: "Oven controls are located on the back panel and the style is flexible for your family’s needs– it can fit between cabinets/countertops, at the end of a cabinet run or all by itself.  Ranges can be found in all price points from entry level to premium.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+100000374/",
                                    id: "rear-control-ranges",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/dor.png",
                                    thumb: "./public/images/products/thumbs/dor.png",
                                    title: "Double Oven Ranges",
                                    alt: "Double Oven Ranges",
                                    desc: "Double ovens come in several shapes and sizes; a smaller top oven paired with a larger one on the bottom and vise versa. When deciding, consider: What kind of things are you usually cooking and how often? How many people are in your household? With two ovens, it’s a piece of cake getting bake sale ready while cooking dinner for the entire family.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+100000375/",
                                    id: "double-oven-ranges",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/wall-oven.png",
                                    thumb: "./public/images/products/thumbs/wall-oven.png",
                                    title: "Wall Ovens",
                                    alt: "Wall Ovens",
                                    desc: "Built-in wall ovens offer a little more flexibility in busy kitchens. The wall oven is usually installed at chest height for safe transfers of heavier dishes. There are many different options available to choose from; single wall oven, double wall oven, microwave Combination and Built-In Microwave.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102280007/",
                                    id: "wall-oven",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/cooktop.png",
                                    thumb: "./public/images/products/thumbs/cooktop.png",
                                    title: "Cooktops",
                                    alt: "Cooktops",
                                    desc: "This flat surface with burners or elements can be built into an existing countertop or as a separate appliance. It doesn’t matter if you’re boiling, simmering or pan-frying a quick morning scramble, the technology choices are the same for both.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102280011/",
                                    id: "cooktops",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/microwave.png",
                                    thumb: "./public/images/products/thumbs/microwave.png",
                                    title: "Microwaves",
                                    alt: "Microwaves",
                                    desc: "Over-the-range microwave models are installed above your cooking area and come equipped with a built-in hood fan for ventilation. Enhanced models include a convection microwave which uses an interior fan and separate heating element to evenly circulate hot air over the food, giving you that fresh straight-out-of-the-oven effect.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102280018/",
                                    id: "microwaves",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/hood.png",
                                    thumb: "./public/images/products/thumbs/hood.png",
                                    title: "Hoods",
                                    alt: "Hoods",
                                    desc: "Range hoods are a stylish way to ventilate the kitchen. Configurations include under cabinet range hoods, island range hoods and wall mounted range hoods. Many hoods offer lighting to illuminate your cooktop.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Hoods-3/102280014/",
                                    id: "hoods",
                                    ctaText: "Learn More"
                                }
                            ]
                        }
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead-fr.jpg",
                            alt: "test",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
                            image: './public/images/banner_fr.jpg',
                            ctaText: 'En savoir plus'
                        },
                        features: {
                            enabled: true,
                            features: [
                                // {
                                // 	image: "./public/images/refer-landing-shopping-cart.png",
                                // 	title: "Guide D'achat",
                                // 	desc: "Éléments à considérer lorsque vous magasinez",
                                // 	alt: "test",
                                // 	cta: "Cliquez ici",
                                // 	link: "http://whirlpool.ca/fr_CA/",
                                // 	type: "cart"
                                // },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Classements et Évaluations",
                                    desc: "Voyez ce que les autres clients en disent",
                                    alt: "test",
                                    cta: "Cliquez ici",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html#Ovens",
                                    type: "star"
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouvez Votre Électroménager Whirlpool",
                                    desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
                                    alt: "test",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Fonctions supplémentaires",
                            features: [
                                {
                                    title: "Accessoires supplémentaires",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Filtres à eau",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_80/jump-pages_water-filters.content.html",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Entretien autorisé",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "/other-assets/fr_CA/pdf/WHR_FIT_Front Control_Guarantee_2016_FR.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Innovation à voir absolument",
                            videos: [
                                {
                                    image: './public/images/video-thumb-1.jpg',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Système de rangement Perfect Places<sup>&trade;</sup>',
                                    ctaTitle: 'Système de rangement Perfect Places<sup>&trade;</sup>',
                                    alt: "test",
                                    cta: 'Voir',
                                    desc: 'La conception Whirlpool à double tiroir  offre cinq zones de rangement uniques pour mieux organiser vos articles. Il s\'agit de notre réfrigérateur le plus flexible à ce jour.'
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Fonctions Resource Saver<sup>&trade;</sup> et EasyView<sup>&trade;</sup>',
                                    ctaTitle: 'Fonctions Resource Saver<sup>&trade;</sup><br/>et EasyView<sup>&trade;</sup>',
                                    alt: "test",
                                    cta: 'Voir',
                                    desc: 'Les réfrigérateurs les plus efficaces de l’industrie dans leur catégorie respective. Augmentez la souplesse de rangement de votre réfrigérateur et préservez la fraîcheur et le bon goût de vos fruits et légumes grâce au système de bacs à légumes triples EasyView™. Désormais, vous pouvez facilement accéder aux aliments grâce à la visibilité totale à travers le bac à légumes. De plus, vous pourrez ranger une grande variété d\'articles grâce aux trois tiroirs. Le contrôle automatique d\'humidité contribue également à maintenir la fraîcheur.',
                                },
                                {
                                    image: './public/images/video-thumb-3.jpg',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Système de rangement StoreRight<sup>&trade;</sup>',
                                    ctaTitle: 'Système de rangement StoreRight<sup>&trade;</sup>',
                                    alt: "test",
                                    cta: 'Voir',
                                    desc: 'Le système de rangement StoreRight™ préserve la fraîcheur des aliments et réduit les brûlures de congélation, grâce à une technologie de refroidissement perfectionnée et ajuste automatiquement les niveaux d\'humidité.'
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choisissez votre style',
                            nav: {
                                text: 'Tout<br/>Voir',
                                link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003/'
                            },
                            products: [
                                {
                                    image: "./public/images/products/double-drawer.png",
                                    title: "Tiroir double",
                                    desc: "Devenez le champion de l’organisation grâce à notre réfrigérateur polyvalent à double tiroir, conçu pour tous les besoins de votre famille. Son style unique offre 9 espaces de rangement, optimisés par notre système PerfectPlaces™, avec le tiroir à température contrôlée et le bac pour petits articles.",
                                    link: "http://www.whirlpool.ca/fr_CA/kitchen-1/refrigeration-2/refrigerators-3/-%5BWRV986FDEM%5D-5552596/WRV986FDEM/",
                                    alt: "test",
                                    id: "double-drawer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/french-door.png",
                                    title: "Portes françaises",
                                    desc: "Nos réfrigérateurs à portes françaises procurent un rangement polyvalent, maintiennent vos produits frais à hauteur des yeux et vous permettent de conserver facilement vos produits congelés favoris. Leur élégance et capacité optimale font de ces réfrigérateurs un élément idéal de votre cuisine familiale.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                                    alt: "test",
                                    id: "french-door",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/side-by-side.png",
                                    title: "Côte à côte",
                                    desc: "Découvrez l’avantage d’un espace supplémentaire dans les balconnets de porte qui facilitent le rangement et l'accès aux petits ou grands articles. Ce style classique offre un rangement parfaitement équilibré entre les aliments frais et surgelés, avec la possibilité de choisir différentes tailles.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                                    alt: "test",
                                    id: "side-by-side",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/bottom-freezer.png",
                                    title: "Congélateur inférieur",
                                    desc: "Bénéficiez d’un accès pratique aux aliments frais et aux collations sur le pouce ou après l'école. Vous avez le choix entre le congélateur-tiroir ou à porte, ainsi qu'une variété de tailles s'agençant à tout espace de votre maison.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                                    alt: "test",
                                    id: "bottom-freezer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/top-freezer.png",
                                    title: "Congélateur supérieur",
                                    desc: "Il y aura toujours une place pour vos aliments frais ou surgelés favoris dans ce réfrigérateur au style simple et classique à la fois. Notre réfrigérateur à congélateur supérieur offre un excellent rapport qualité/prix et est aussi disponible en tailles plus petites.",
                                    link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                                    alt: "test",
                                    id: "top-freezer",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/freezer.png",
                                    title: "Congélateurs",
                                    desc: "Découvrez tout l'espace supplémentaire pour les aliments congelés, tels que les pizzas ou les suçons glacés. Nos modèles horizontaux ou verticaux assurent l'ajustement idéal pour tout espace.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                                    alt: "test",
                                    id: "freezers",
                                    ctaText: "En savoir plus"
                                }
                            ]
                        }
                    };
                }
                AppDataService.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppDataService.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppDataService);
                return AppDataService;
            }());
            exports_1("AppDataService", AppDataService);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map