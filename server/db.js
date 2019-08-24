
const Sequelize = require('sequelize');

//CONNECTION TO DATABASE
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres:localhost/litmus`,
  { logging: true },
);
//MODEL
const Community = db.define('community', {
  name: {
    type: Sequelize.STRING
  },
  toxicity: {
    type: Sequelize.ENUM('Nuclear wasteland', 'toxic', 'controversial', 'unaggresive')
  }
});

const seedData = [
  {
    name: 'test',
    toxicity: 'toxic'
  }
];

syncAndSeed = async() => {
  await db.sync({force:true});
  await seedData.map((community) => {
    Community.create(community)
  });
}


syncAndSeed();

//EXPORT
module.exports = db;
