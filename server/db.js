
const Sequelize = require('sequelize');
//const Community = require('./Community')

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
  comments: {
    type: Sequelize.ARRAY
  }
});

const seedData = [
  {
    name: 'test',
    numberofcomments: 3,
    comments: ["Nice fake name crymi a river. Your attitude/opinion sucks \u0026 your no expert.\nYour an artist hater \u0026 hate poor people obviously. I'm not really a fan of her art, you have a couple good points, but she has more than you.\nThe whole west coast is growing \u0026 will continue to do so.  \nPeople will complain when cheap rent gets tripled \u0026 quadrupled, It sucks. \nReguardless an artist,musician,blue collar or business owner, It sucks.  \nBig investment business sucks if they don't cAre about ptown, we need great new buildings. But not at the cost of our heritage,the past,history,communities,cost of creative people that \"made Portland Known \u0026 Great\" \nThe cost of others advertising our \"Most livable city,Best transportation,Most affordable,quality of life! \nAffordable still exists, but soon will be gentrified, built up \u0026 overpriced for the greed of investors. Good owners \u0026 developers do exist that care, but it's rare. Heard Argument before not as easy as supply/Demand. She might be a kook but so r you","On a small island like lady liberty just off of the bowl ampitheatre on the waterfront. Have steps around the island so you could swim out to it and lay out and relax on the steps. It would look impressive in that location","I made an account specifically to tell you that this article is one of the most poorly written and thought out articles I have read in recent months."]
  }
];

const syncAndSeed = async() => {
  await seedData.forEach( (community) => {
    Community.create(community)
  })
};

syncAndSeed()

//EXPORT
module.exports = db;
