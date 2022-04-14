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
        type: '14k Gold',
        pricePerOunce: '$1154.56'
    },
    {
        type: "Sterling Silver",
        pricePerOunce: '$25.29'
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
        type: 'Amethyst',
        pricePerKarat: `Prices for high quality cut stones are typically 
        in the range of $20 to $30 per carat, with particularly fine pieces around $40 per carat.`
    },
    {
        type: 'Peridot',
        pricePerKarat: '$50-$80'
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
        notes: `Information from : https://www.gemsociety.org/article/victorian-period-jewelry-1837-1860/
        See README for full citation`
    },
    {
        type: 'Victorian - Grand Period',
        background: `With the advent of electricity, gems were in style as they dazzled in the light.
        Heavy jewelry was common during this time as well as bolder pieces that reflected the changing roles
        for women at the time. Gypsy and Pave settings were used to hold gems.  A Gypsy setting has little prongs that hold
        the gem in place, whereas a pave setting has almost invisible prongs. Archeological digs continued during this period,
        generating great public curiosity. 
        Thus, Ancient Greek, Roman, and Egyptian designs remained popular and inspired cameo use. 
        Excavations of Ancient Etruscan cities in Italy brought about a revival of Etruscan designs in jewelry. 
        In particular, an ancient metal technique featuring fine, beaded granulation was resurrected.`,
        styleElements: `Materials: Low karat gold (9k, 12k, and 15k), silver, steel, rolled gold
        Motifs: acorns, bees, bells, birds, crescents, crosses, daisies, hearts, monograms, stars, and shield shapes. 
        Geometric patterns were common. Enameling remained popular.
        Popular stones: amethyst, diamond, garnet, jet, onyx, opal, pearl, ruby, sapphire, and turquoise. 
        “Carbuncles,” or cabochon-cut garnets, commonly appeared in pendants, brooches, and necklaces.
        Materials such as bog oak, coral, ivory, and tortoiseshell were also used as gems.
        Goldstone, a glass gem simulant, was widely used.
        Notable gem cutting styles included the following:
        Rose Cut: round shape with a domed top and flat bottom.
        Old Mine Cut: rounded square shape with many facets. Closely resembles today’s modern round brilliant cut.
        Cabochon: rounded top and flat bottom.
        popular jewelry pieces: 
        Earring of all sizes were popular. Post earrings were introduced during this time period.
        Other popular items included the following:
        Hair jewelry
        Large necklaces with large pendants
        Long, rectangular bar pins
        Tiaras and tortoiseshell combs
        This period also featured cabochons with embedded gems, and micro mosaic jewelry.
        `,
        timePeriod: '1861-1885',
        notes: `Information from: https://www.gemsociety.org/article/victorian-period-1861-1885/
        See README for full citation`
    },
    {
        type: 'Victorian - Aesthetic Period',
        background:`This is the late victorian period.  
        There was an emerging middle class and women were now a integral part of the workforce. 
        The heave jewelry of old didn't work well with the new active lifestyles of women, 
        so pieces were made lighter and smaller Etruscan and Egyptian revival themes continued 
        to fascinate jewelry enthusiasts. Aesthetic Period pieces also featured Oriental and sporting themes..
        Delicate pieces replaced the heavy opulance of the past. 
        Most jewelry of this period was machine produced and marks were stamped on it.`,
        styleElements: `Popular metals: gold, rolled gold, silver, oxidized silver platinum
        Motifs: animal heads, barrels, bows, clovers, crescents, horseshoes, knots, oak leaves, owls, 
        quatrefoils, stars, trefoils, and wishbones. 
        Designers often combined double hearts with crowns or knots.
        Popular stones: amethyst, aquamarine, chrysoberyl, chrysoprase, diamond, emerald, black glass, 
        horn, moonstone, opal, pearl, peridot, quartz, ruby, sapphire, and turquoise.
        Notable gem cutting styles included the following:
        Rose Cut: round shape with a domed top and flat bottom.
        Old Mine Cut: rounded square shape with many facets. Closely resembles today’s modern round brilliant cut.
        Old European Cut: round faceted shape. Although a precursor to today’s modern round brilliant cut, it’s clunkier. 
        You’ll frequently find this cut used in rings dated through the 1900s.
        Cabochon: rounded top and flat bottom.
        Tiffany and Co. kick-started the diamond solitaire engagement ring trend during this time period.
        Popular pieces included small stud earrings, stick pins, and class rings. 
        People often wore heart-shaped lockets on bracelets.
        Small brooches were often worn en masse, scattered across necklines.
        Vinaigrettes, small metal containers for scented sponges or spices, enjoyed widespread use.
        Chokers or dog-collar style necklaces were common.`,
        timePeriod: '1885-1901',
        notes: `Information from: https://www.gemsociety.org/article/victorian-period-1885-1901-late-period/
        See README for full citation`
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
