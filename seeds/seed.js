const sequelize = require('../config/connection');
const { User, Post, Reply } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const replyData = require('./replyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const reply = await Reply.bulkCreate(replyData, {
    individualHooks: true,
    returning: true,
  });
  console.log(reply);

  process.exit(0);
};

seedDatabase();
