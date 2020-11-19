const log = require('../utilities/log');

/**
 * Database seeding
 * @param database {object} - database connection
 * @returns {Promise<void>}
 */
module.exports = async (database) => {
  // check existing records
  const existing = await database.ViewCount.findOne();
  if (existing) {
    return log('-- database: seeding is already done');
  }

  // create records
  const now = Date.now();
  const promises = [];
  for (let i = 1; i <= 50; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      const record = new database.ViewCount({
        productId: String(i),
        userId: i + j > 50 ? String(50) : String(i + j),
        viewDate: new Date(now),
        created: `${now}`,
        updated: `${now}`,
      });
      promises.push(record.save());
    }
  }

  // save records
  await Promise.all(promises);

  return log('-- database: seeding is done');
};
