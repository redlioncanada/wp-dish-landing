
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/dish-landing-masthead.jpg",
				alt: "Front control range installed into countertop",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More',
				analytics: {
					"category": "@category",
					"action": "Clicked Bottom Banner",
					"label": "Every Day Care-Learn More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/dish-landing-shopping-cart.png",
						title: "Buying Guide",
						alt: "Buying Guide",
						desc: "What to look for when buying",
						cta: "Click Here",
						link: "http://blog.whirlpool.ca/look-buying-range/",
						type: "cart",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Buying Guide"
						}
					},
					{
						image: "./public/images/dish-landing-star.png",
						title: "Ratings and Reviews",
						alt: "Ratings and Reviews",
						desc: "See what others are saying",
						cta: "Click Here",
						link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html#Dishwashers",
						type: "star",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Ratings & Reviews"
						}
					},
					{
						image: "./public/images/dish-landing-mag-glass.png",
						title: "Find Your Dishwasher",
						alt: "Find Your Dishwasher",
						desc: "Need help finding your dishwasher?",
						cta: "Click Here",
						link: "http://mywhirlpool.wpc-stage.com/category/#/?category=Dishwashers",
						type: "magnifier",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Find Your WP"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Additional Features",
				features: [
					{
						title: "Dishwasher Cleaner",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Kitchen_Accessories_Dishwasher-3/102280087/",
						alt: "Dishwasher Cleaner",
						text: "",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "Flex Heat Element"
						}
					},
					{
						title: "Disposers",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Dishwasher__Cleaning_Disposers-3/102280039/",
						alt: "Disposers",
						text: "",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "Temperature Sensor"
						}
					},
					{
						title: "30 Day Clean & Quiet Guarantee",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.whirlpool.ca/other-assets/en_CA/pdf/WP_2016_Quiet_Guarantee_EN.pdf ",
						alt: "30 Day Clean & Quiet Guarantee",
						text: "",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "FIT System Guarantee"
						}
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Must-See Innovation",
				videos: [
					{
						id: 'UVXX0KOE0Pk',
						thumb: './public/images/video-select-1.jpg',
						title: 'Silverware Spray',
						alt: "Silverware Spray",
						ctaTitle: 'Silverware<br/> Spray',
						cta: 'Play Video',
						desc: 'Silverware Spray helps remove stuck-on food - like peanut butter on knives, and oatmeal on spoons – from your utensils. It delivers a concentrated shower of water to the AnyWare<sup>™</sup> Plus Silverware Basket to virtually eliminate rewashing.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Electric and Gas Ranges Video"
						}
					},
					{
						id: '-24XCao5ncg',
						thumb: './public/images/video-select-2.jpg',
						title: 'TotalCoverage Spray Arm',
						alt: "TotalCoverage Spray Arm",
						thumbAlt:"TotalCoverage Spray Arm",
						ctaTitle: 'TotalCoverage <br/>Spray Arm',
						cta: 'Play Video',
						desc: 'The TotalCoverage Spray Arm cleans with twice the jets for more coverage. A smarter sequence of spray patterns cleans dishes from multiple nozzles throughout the cycle, so you can be sure your dishes are spotless and ready to use.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Cooking Frozen-Bake Tech Video"
						}
					},
					{
						id:'G7tIcABX7Yg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Target Clean<sup>™</sup> <br/>Option',
						alt: "Target Clean™ Option",
						thumbAlt:"Close up of Fan Convection Cooking",
						ctaTitle: 'Target Clean<sup>™</sup> <br/>Option',
						cta: 'Play Video',
						desc: 'The Target Clean<sup>™</sup> option scours away baked-on foods from casserole dishes with 40 focused jets. Intense streams deliver direct cleaning to even hard-to-reach corners, saving you from any additional soaking and scrubbing.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Fan Convection Cooking Video"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Style',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Dishwasher__Cleaning_Dishwashers-3/102280034/',
					analytics: {
						"category": "@category",
						"action": "Clicked Choose Your Cooking Style",
						"label": "See all"
					}
				},
				products: [
					{
						image: "./public/images/products/tc.png",
						thumb: "./public/images/products/thumbs/tc.png",
                        title: "Top Control",
                        alt: "Top Control",
                        desc: "The controls are discretely located on the top of the door to create a sleek, easy-to-clean exterior. Features such as TargetClean™, Sensor Cycle, and the AnyWare™ Plus Silverware Basket offer advanced cleaning performance that will make easy work of even the dirtiest of dishes.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Dishwasher__Cleaning_Dishwashers-3/102280034+10000147/",
                        id: "front-control-ranges",
                        ctaText: "Learn More",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Front Control Range"
						}
                    },
					{
						image: "./public/images/products/fc.png",
						thumb: "./public/images/products/thumbs/fc.png",
                        title: "Front Control",
                        alt: "Front Control",
                        desc: "The controls are located on the front of the dishwasher making it easier to select cycles and other settings even after dishes have been loaded. Advanced features such as TargetClean™, Sensor Cycle, and the AnyWare™ Plus Silverware Basket, all found within a stainless steel interior, ensure your dishes always come out sparkling.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Dishwasher__Cleaning_Dishwashers-3/102280034+10000148/",
                        id: "rear-control-ranges",
                        ctaText: "Learn More",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Rear Control Range"
						}
                    },
					{
						image: "./public/images/products/port.png",
						thumb: "./public/images/products/thumbs/port.png",
                        title: "Portable",
                        alt: "Portable",
                        desc: "No space under your counter for a dishwasher? No problem! Built-in wheels give this dishwasher the ability to be used anywhere in your kitchen, and can be easily stowed away when not in use. It also features the same Tall Tub interior spacing found in built-in models, ensuring tall or bulky items can be placed inside with ease.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Dishwasher__Cleaning_Dishwashers-3/102280034+10000149/",
                        id: "double-oven-ranges",
                        ctaText: "Learn More",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Double Oven Range"
						}
                    }

				 ]
				}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-fr.jpg",
				alt: "Cuisinière à commandes frontales installée dans un comptoir",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus',
				analytics: {
					"category": "@category",
					"action": "Clicked Bottom Banner",
					"label": "Every Day Care-Learn More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D'achat",
						desc: "Éléments à considérer lorsque vous magasinez",
						alt: "Guide d’achat",
						cta: "Cliquez ici",
						link: "/other-assets/fr_CA/pdf/WP_Cooking_Buying_Guide_FR.pdf",
						type: "cart",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
						desc: "Voyez ce que les autres clients en disent",
						alt: "Évaluations et commentaires",
						cta: "Cliquez ici",
						link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html#Ovens",
						type: "star",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Ratings & Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez Votre Électroménager Whirlpool",
						desc: "Vous avez besoin d’aide pour trouver une cuisinière?",
						alt: "Trouver votre électroménager Whirlpool",
						cta: "Cliquez ici",
						link: "http://trouvermon.whirlpool.ca",
						type: "magnifier",
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking Resources",
							"label": "Cooking Find Your WP"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Fonctions supplémentaires",
				features: [
					{
						title: "Élément FlexHeat<sup>&trade;</sup>",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "Élément Flex Heat",
						text: "L'élément FlexHeat™ permet d'avoir deux ou trois éléments en un seul. L’anneau intérieur de 6 po est idéal pour les petites casseroles et les anneaux extérieurs permettent d'accueillir de plus grandes batteries de cuisine.",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "Flex Heat Element"
						}
					},
					{
						title: "Capteur de température",
						image: "./public/images/more-features-2.jpg",
						link: "",
						alt: "Capteur de température",
						text: "Un capteur intégré surveille la température du four et contrôle les éléments de cuisson pour assurer des résultats uniformes et délicieux à chaque fois.",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "Temperature Sensor"
						}
					},
					{
						title: "Garantie d’installation FIT",
						image: "./public/images/more-features-3.jpg",
						link: "/other-assets/fr_CA/WHR_FIT_Front Control_Guarantee_2016_FR.pdf",
						alt: "Garantie d'installation FIT",
						text: "",
						cta: "",
						analytics: {
							"category": "@category",
							"action": "Hovered Over Cooking-Additional Features",
							"label": "FIT System Guarantee"
						}
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
						title: 'Cuisinières électriques et au gaz ',
						alt: "Cuisinières électriques et au gaz ",
						ctaTitle: 'Cuisinières électriques et au gaz',
						cta: 'Voir',
						desc: 'Préparez votre souper plus rapidement et regagnez ainsi du temps dans votre journée bien occupée, grâce aux cuisinières équipées du système TimeSavor<sup>&trade;</sup>.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Electric and Gas Ranges Video"
						}
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Technologie Frozen Bake<sup>&trade;</sup>',
						alt: "Technologie Frozen Bake",
						thumbAlt:"Pizza en train de cuire dans le four",
						ctaTitle: 'Technologie<br/>Frozen Bake<sup>&trade;</sup>',
						cta: 'Voir',
						desc: 'La technologie Frozen Bake™ cuit les aliments plus rapidement, éliminant le besoin de préchauffer le four pour vos aliments favoris, tels que les pizzas, lasagnes, pépites de poulet, frites ou tartes. Il suffit de sélectionner le type d\'aliment, la température et le temps de cuisson indiqué sur l\'emballage du produit congelé, puis le four personnalisera la cuisson.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Cooking Frozen-Bake Tech Video"
						}
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Cuisson par convection à ventilation',
						alt: "Cuisson par convection à ventilation",
						thumbAlt:"Gros plan sur la cuisson par convection à ventilateur",
						ctaTitle: 'Cuisson par convection à ventilation',
						cta: 'Voir',
						desc: 'Obtenez une cuisson uniforme sur toutes les grilles grâce à la convection par ventilateur. La chaleur se propage dans tout le four, vous obtiendrez ainsi des résultats optimaux, quelle que soit la grille utilisée.',
						analytics: {
							"category": "@category",
							"action": "Clicked Cooking-Must-See Innovation",
							"label": "Fan Convection Cooking Video"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003/',
					analytics: {
						"category": "@category",
						"action": "Clicked Choose Your Cooking Style",
						"label": "See all"
					}
				},
				products: [
					{
						image: "./public/images/products/fcr.png",
						thumb: "./public/images/products/thumbs/fcr.png",
                        title: "Cuisinières à commandes frontales",
                        alt: "Cuisinières à commandes frontales",
                        desc: "Les commandes frontales sont plus sécuritaires et faciles d'accès, et leur allure intégrée s'agence à toute cuisine. Vous pouvez installer ces cuisinières au bout du comptoir, grâce aux parois finies.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+100000374/",
                        id: "front-control-ranges",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Front Control Range"
						}
                    },
					{
						image: "./public/images/products/rcr.png",
						thumb: "./public/images/products/thumbs/rcr.png",
                        title: "Cuisinières à commandes arrière",
                        alt: "Cuisinières à commandes arrière",
                        desc: "Ces cuisinières peuvent se placer entre les placards/comptoirs, au bout d'un comptoir ou même séparément; et les commandes sont placées sur le panneau arrière. Les prix varient, du modèle de base au modèle supérieur.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+4294965600/",
                        id: "rear-control-ranges",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Rear Control Range"
						}
                    },
					{
						image: "./public/images/products/dor.png",
						thumb: "./public/images/products/thumbs/dor.png",
                        title: "Cuisinières à four double",
                        alt: "Cuisinières à four double",
                        desc: "Les fours doubles sont de tailles et formes variées. Réfléchissez à ce que vous cuisinez le plus fréquemment et pour combien de personnes. Les deux fours permettent de cuire vos pâtisseries et le souper en même temps.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+102280334/",
                        id: "double-oven-ranges",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Double Oven Range"
						}
                    },
					{
						image: "./public/images/products/wall-oven.png",
						thumb: "./public/images/products/thumbs/wall-oven.png",
                        title: "Fours muraux",
                        alt: "Four mural",
                        desc: "Les fours muraux encastrés sont très polyvalents. Situés à hauteur de poitrine, les plats lourds sont faciles à transférer sur le comptoir. Choix variés : four à micro-ondes encastré, four mural simple, double, ou combiné avec un four à micro-ondes.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102280007/",
                        id: "wall-oven",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Wall Oven"
						}
                    },
                    {
						image: "./public/images/products/cooktop.png",
						thumb: "./public/images/products/thumbs/cooktop.png",
                        title: "Tables de cuisson",
                        alt: "Vue aérienne d'une table de cuisson",
                        desc: "Cette surface de cuisson à brûleurs ou éléments peut se placer sur un comptoir existant ou séparément. Excellente technologie pour porter à ébullition, mijoter ou frire des œufs brouillés rapidement.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102280011/",
                        id: "cooktops",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Cooktop"
						}
                    },
					{
						image: "./public/images/products/microwave.png",
						thumb: "./public/images/products/thumbs/microwave.png",
                        title: "Fours à micro-ondes",
                        alt: "Fours à micro-ondes",
                        desc: "Les fours à micro-ondes à hotte intégrée s’installent au dessus de votre surface de cuisson. Certains modèles sont dotés de la cuisson à convection, utilisant des ventilateurs internes et des éléments chauffants séparés faisant circuler uniformément l'air chaud.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102280018/",
                        id: "microwaves",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Microwaves"
						}
                    },
                    {
						image: "./public/images/products/hood.png",
						thumb: "./public/images/products/thumbs/hood.png",
                        title: "Hottes",
                        alt: "Hotte de ventilation",
                        desc: "Les hottes de ventilation sont une façon élégante d'aérer votre cuisine. Choix de hottes sous armoire, hottes montées sur îlot et hottes murales. Certaines sont aussi dotées d'un éclairage de surface de cuisson.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Hoods-3/102280014/",
                        id: "hoods",
                        ctaText: "En savoir plus",
						analytics: {
							"category": "@category",
							"action": "Clicked Choose Your Cooking Style",
							"label": "Hoods"
						}
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}