
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
						link: "",
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
						id: 'Fxxny2lMDhQ',
						thumb: './public/images/video-select-1.jpg',
						title: 'Electric and Gas Ranges',
						alt: "Electric and Gas Ranges",
						ctaTitle: 'Electric and Gas Ranges',
						cta: 'Play Video',
						desc: 'Get dinner on the table quickly and a few minutes back in your day to keep it moving. Thanks to ranges from the brand with the TimeSavor<sup>&trade;</sup> system.'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Frozen Bake<sup>&trade;</sup> Technology',
						alt: "Frozen Bake Technology",
						ctaTitle: 'Frozen Bake<sup>&trade;</sup> Technology',
						cta: 'View',
						desc: 'Frozen Bake<sup>&trade;</sup> technology cooks frozen foods faster<sup>2</sup> by eliminating the need to preheat the oven. Just select the food type, temperature and cook time listed on the frozen item\'s package and the oven will start customizing',
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
		}

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
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D'achat",
						desc: "Éléments à considérer lorsque vous magasinez",
						alt: "test",
						cta: "Cliquez ici",
						link: "http://whirlpool.ca/fr_CA/",
						type: "cart"
					},
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
						desc: "Vous avez besoin d’aide pour trouver un cuisinière",
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
						title: "Élément Flex Heat",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "Élément Flex Heat",
						text: "L'élément FlexHeat™ permet d'avoir deux ou trois éléments en un seul. L’anneau intérieur de 6 po est idéal pour les petites casseroles et les anneaux extérieurs permettent d'accueillir de plus grandes batteries de cuisine.",
						cta: ""
					},
					{
						title: "Capteur de température",
						image: "./public/images/more-features-2.jpg",
						link: "",
						alt: "Capteur de température",
						text: "Un capteur intégré surveille la température du four et contrôle les éléments de cuisson pour assurer des résultats uniformes et délicieux à chaque fois.",
						cta: ""
					},
					{
						title: "Garantie d’installation FIT",
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
						title: 'Cuisinières électriques et au gaz ',
						alt: "Cuisinières électriques et au gaz ",
						ctaTitle: 'Cuisinières électriques et au gaz',
						cta: 'Voir',
						desc: 'Préparez votre souper plus rapidement et regagnez ainsi du temps dans votre journée bien occupée, grâce aux cuisinières équipées du système TimeSavor<sup>&trade;</sup>.'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Technologie Frozen Bake<sup>&trade;</sup>',
						alt: "Technologie Frozen Bake",
						ctaTitle: 'Technologie<br/>Frozen Bake<sup>&trade;</sup>',
						cta: 'Voir',
						desc: 'La technologie Frozen Bake™ cuit les aliments plus rapidement, éliminant le besoin de préchauffer le four pour vos aliments favoris, tels que les pizzas, lasagnes, pépites de poulet, frites ou tartes. Il suffit de sélectionner le type d\'aliment, la température et le temps de cuisson indiqué sur l\'emballage du produit congelé, puis le four personnalisera la cuisson.',
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Cuisson par convection à ventilation',
						alt: "Cuisson par convection à ventilation",
						ctaTitle: 'Cuisson par convection à ventilation',
						cta: 'Voir',
						desc: 'Obtenez une cuisson uniforme sur toutes les grilles grâce à la convection par ventilateur. La chaleur se propage dans tout le four, vous obtiendrez ainsi des résultats optimaux, quelle que soit la grille utilisée.'
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
						image: "./public/images/products/fcr.png",
						thumb: "./public/images/products/thumbs/fcr.png",
                        title: "Cuisinières à commandes frontales",
                        alt: "Cuisinières à commandes frontales",
                        desc: "Les commandes frontales sont plus sécuritaires et faciles d'accès, et leur allure intégrée s'agence à toute cuisine. Vous pouvez installer ces cuisinières au bout du comptoir, grâce aux parois finies.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+100000374/",
                        id: "front-control-ranges",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/rcr.png",
						thumb: "./public/images/products/thumbs/rcr.png",
                        title: "Cuisinières à commandes arrière",
                        alt: "Cuisinières à commandes arrière",
                        desc: "Ces cuisinières peuvent se placer entre les placards/comptoirs, au bout d'un comptoir ou même séparément; et les commandes sont placées sur le panneau arrière. Les prix varient, du modèle de base au modèle supérieur.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+4294965600/",
                        id: "rear-control-ranges",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/dor.png",
						thumb: "./public/images/products/thumbs/dor.png",
                        title: "Cuisinières à four double",
                        alt: "Cuisinières à four double",
                        desc: "Les fours doubles sont de tailles et formes variées. Réfléchissez à ce que vous cuisinez le plus fréquemment et pour combien de personnes. Les deux fours permettent de cuire vos pâtisseries et le souper en même temps.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+102280334/",
                        id: "double-oven-ranges",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/wall-oven.png",
						thumb: "./public/images/products/thumbs/wall-oven.png",
                        title: "Fours muraux",
                        alt: "Fours muraux",
                        desc: "Les fours muraux encastrés sont très polyvalents. Situés à hauteur de poitrine, les plats lourds sont faciles à transférer sur le comptoir. Choix variés : four à micro-ondes encastré, four mural simple, double, ou combiné avec un four à micro-ondes.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102280007/",
                        id: "wall-oven",
                        ctaText: "En savoir plus"
                    },
                    {
						image: "./public/images/products/cooktop.png",
						thumb: "./public/images/products/thumbs/cooktop.png",
                        title: "Tables de cuisson",
                        alt: "Tables de cuisson",
                        desc: "Cette surface de cuisson à brûleurs ou éléments peut se placer sur un comptoir existant ou séparément. Excellente technologie pour porter à ébullition, mijoter ou frire des œufs brouillés rapidement.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102280011/",
                        id: "cooktops",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/microwave.png",
						thumb: "./public/images/products/thumbs/microwave.png",
                        title: "Fours à micro-ondes",
                        alt: "Fours à micro-ondes",
                        desc: "Les fours à micro-ondes à hotte intégrée s’installent au dessus de votre surface de cuisson. Certains modèles sont dotés de la cuisson à convection, utilisant des ventilateurs internes et des éléments chauffants séparés faisant circuler uniformément l'air chaud.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102280018/",
                        id: "microwaves",
                        ctaText: "En savoir plus"
                    },
                    {
						image: "./public/images/products/hood.png",
						thumb: "./public/images/products/thumbs/hood.png",
                        title: "Hottes",
                        alt: "Hottes",
                        desc: "Les hottes de ventilation sont une façon élégante d'aérer votre cuisine. Choix de hottes sous armoire, hottes montées sur îlot et hottes murales. Certaines sont aussi dotées d'un éclairage de surface de cuisson.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Hoods-3/102280014/",
                        id: "hoods",
                        ctaText: "En savoir plus"
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