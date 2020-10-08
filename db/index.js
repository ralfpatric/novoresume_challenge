const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://localhost:27017';
const dbName = 'novoresume';

const init = () => MongoClient.connect(connectionUrl, { useUnifiedTopology: true })
  .then((client) => {
    global.db = client.db(dbName);
  });

const seedProducts = () => {
  const collection = global.db.collection('products');
  // TO DO: Needs check to verify whether the database contains any data
  // If data is not present, seed database with the following array of objects
  try {
    return collection.insertMany([{
      price: 4.99,
      title: 'Dark Almond & Orange',
      subtitle: 'Dark, Crunchy & Sweet',
      description: 'Crunchy roasted pieces of Californian almonds and sweet orange peel, coated in 100% sustainably sourced cocoa. The perfect balance between dark and sweet chocoloate. Enjoy!',
    }, {
      price: 3.99,
      title: 'Alpine Milk Chocolate',
      subtitle: 'A true peak of taste',
      description: 'The name gives it away: this is a chocolate that reaches loy heights. A special conching process gives this mixture of Alpine milk and cocoa its characteristic caramel and honey flavour. No wonder that some people abseil off home with this bar.',
    }, {
      price: 3.49,
      title: 'Cocoa Mouse',
      subtitle: 'Famoussely Tasty',
      description: 'If you can’t believe your eyes when you see the extra large pieces of our Cocoa Mousse bar, you’ll just have to trust in your taste. The lightly whipped cocoa mousse blends harmoniously with the hints of honey and caramel in our Alpine milk chocolate.',
    }, {
      price: 3.99,
      title: 'Cornflakes',
      subtitle: 'The chocolaty of cornflakes',
      description: 'RITTER SPORT Cornakes gives you breakfast around the clock with crispy cornakes in creamy chocolate. The akes are produced and selected according to strict quality standards: after all, breakfast is the most important meal of the day.',
    }, {
      price: 4.99,
      title: 'Hazelnuts',
      subtitle: 'The Votes are split',
      description: 'Are there more nuts or more chocolate in this bar? You’ll have to try the RITTER SPORT Hazelnuts with nely chopped, roasted hazelnuts in crunchy milk chocolate to nd out. If you can’t decide aer the rst bite, keep munching until you can.',
    }, {
      price: 3.99,
      title: 'Strawberry Yogurt',
      subtitle: 'For the berry hungry',
      description: 'It’s summer all year round with the RITTER SPORT Strawberry Yogurt bar. Plenty of real fruit pieces, strawberry yogurt mousse and crunchy rice crisps give every piece a sunny outlook. Take it from us: this square strawberry eld will make you hot stuff.',
    }, {
      price: 3.49,
      title: 'White + Crisp',
      subtitle: 'Colossally Crunchy Chocolate',
      description: 'This bar is a declaration of love to fans of anything crispy. The roasted corn and rice flakes make it twice as crunchy, combining with the strong milk and vanilla avours of the white chocolate to create a harmonious taste. Enough to make anyone’s heart melt',
    }, {
      price: 3.99,
      title: 'Marzipan',
      subtitle: 'With great chocolate comes great responsibility',
      description: 'Marzipan comes in many dierent shapes, but our favourite is square. It’s simply the best way to bring out this great combination of sweet Californian almonds, a nuance of bier almonds and rm dark chocolate. Sorry about that, marzipan potatoes.',
    }]);
  } catch (err) {
    return 'Failed to create original seed';
  }
};

module.exports = {
  init, seedProducts,
};
