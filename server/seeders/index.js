 const { Color, ComponentType, Country, JewelryType, Layout, Material, Shape, Stone, Style } = require('../models');
//import all models that need seeds
const db = require('../config/connection');

 db.once('open', async () => {
     //delete all pervious data in the seeded models
     Promise.all([Color.deleteMany({user_id: null}), 
        ComponentType.deleteMany({user_id: null}),
        Country.deleteMany({user_id: null}),
        JewelryType.deleteMany({user_id: null}), 
        Layout.deleteMany({user_id: null}), 
        Material.deleteMany({user_id: null}), 
        Shape.deleteMany({user_id: null}), 
        Stone.deleteMany({user_id: null}), 
        Style.deleteMany({user_id: null})
    ]);
//add seeds
const colorData = [
    {
        name: 'Red',
        hex: '#ff0000',
        rgb: '255, 0, 0'
    },
    {
        name: 'Orange',
        hex: '#ff6200',
        rgb: '255, 98, 0'
    },
    {
        name: 'Yellow',
        hex: '#ffff00',
        rgb: '255, 255, 0'
    },
    {
        name: 'Green',
        hex: '#00ff00',
        rgb: '0, 255, 0'
    },
    {
        name: 'Blue',
        hex: '#0000ff',
        rgb: '0, 0, 255'
    },
    {
        name: 'Purple',
        hex: '#8800ff',
        rgb: '136, 0, 255'
    },
    {
        name: 'Brown',
        hex: '#4d2c02',
        rgb: '77, 44, 2'
    },
    {
        name: 'Black',
        hex: '#000000',
        rgb: '0, 0, 0'
    },
    {
        name: 'Grey',
        hex: '#585858',
        rgb: '88, 88, 88'
    },
    {
        name: 'White',
        hex: '#ffffff',
        rgb: '255, 255, 255'
    },
    {
        name: 'Gold',
        hex: '#e0ad04',
        rgb: '224, 173, 4'
    },
    {
        name: 'Silver',
        hex: '#cfcfcf',
        rgb: '207, 207, 207'
    }
];

const componentTypeData = [
    {
        componentType: 'Bead'
    },
    {
        componentType: 'Charm'
    },
    {
        componentType: 'Chain'
    },
    {
        componentType: 'Pendant'
    },
    {
        componentType: 'Bead Cap'
    },
    {
        componentType: 'Cabochon'
    },
];

const countryData = [
    {
        countryName: 'China'
    },
    {
        countryName: 'Japan'
    },
];

const jewelryTypeData = [
    {
        jewelryType: 'Bracelet'
    },
    {
        jewelryType: 'Necklace'
    },
    {
        jewelryType: 'Earrings'
    },
    {
        jewelryType: 'Ring'
    }
];

const layoutData = [
    {

    }
];

const materialData = [
    {
        type: '',
        pricePerOunce: 0.0
    }
];

const shapeData = [
    {
        type: 'Circle'   
    },
    {
        type: 'Oval'   
    },
    {
        type: 'Teardrop'   
    },
    {
        type: 'Square'   
    },
    {
        type: 'Rectangle'   
    },
    {
        type: 'Diamond'   
    },
    {
        type: 'Heart'   
    },
    {
        type: 'Star'   
    },
];
const stoneData = [
    {
        type: '',
        pricePerOunce: 0.0
    }
];

const styleData = [
    {
        type: 'Victorian - Romantic Period',
        background: `This is the first period of victorian jeweltry and is known as the early victorian period.
        Inpsiration was derived from the natural world, the Renaissance and Middle Ages. `,
        styleElements: `Popular motifs: 
        eyes, hands, hearts, anchors, crosses, arrows, 
        clovers, love knots, garters, buckles, vines, and leaves
        The Romantic Period saw a renewed interest in Gothic and Medieval themes.
        Materials: 
        agate, amber, amethyst, chalcedony, chrysoberyl, diamond, emerald, 
        garnet, malachite, seed pearls, quartz, topaz, turquoise, ivory, lava stone, and tortoiseshell, red coral.
        Popular Cuts: 
        Rose Cut: round shape with a domed top and flat bottom.
        Old Mine Cut: rounded square shape with many facets. Closely resembles today’s modern round brilliant cut.
        Cabochon: rounded top and flat bottom.
        Popular Jewelry Items: 
        Acrostic Jewelry: Jewelry in which the stones spell out a word: 
        ruby, emerald, garnet, amethyst, ruby, and diamond = REGARD
        Cameos: carved faces often made of coral, shell and lava stone. Originated in Italy. 
        Girandoles: These drop, cluster style earrings featured three dangling gemstones.`,
        timePeriod: '1837-1860',
        notes: ``
    },
    {
        type: 'Victorian- Grand Period',
        background: ``,
        styleElements: ``,
        timePeriod: '1861-1885',
        notes: ``
    },
    {
        type: 'Victorian- Aesthetic Period',
        background: ``,
        styleElements: ``,
        timePeriod: '1885-1901',
        notes: ``
    },
];
//insert everything into the database with the models
//const createColor = await Color.collection.insertMany(colorData);
    Promise.all([Color.collection.insertMany(colorData),
        ComponentType.collection.insertMany(componentTypeData),
        Country.collection.insertMany(countryData),
        JewelryType.collection.insertMany(jewelryTypeData),
        Layout.collection.insertMany(layoutData),
        Material.collection.insertMany(materialData),
        Shape.collection.insertMany(shapeData),
        Stone.collection.insertMany(stoneData),
        Style.collection.insertMany(styleData)
    ]);

   console.log('all done!');
  process.exit(0);
 });
