const database = require('../../database');
const response = require('../../utilities/response');

/**
 * Create a view
 * @param req {object} - request object
 * @param res {object} - response object
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
  try {
    // check data
    const {
      productId = '',
      userId = '',
    } = req.body;
    if (!(productId && userId)) {
      return response({
        info: 'MISSING_DATA',
        status: 400,
        req,
        res,
      });
    }
    const trimmedProductId = productId.trim();
    const trimmedUserId = userId.trim();
    if (!(trimmedProductId && trimmedUserId)) {
      return response({
        info: 'MISSING_DATA',
        status: 400,
        req,
        res,
      });
    }

    // create ViewCount
    const now = Date.now();
    const record = new database.ViewCount({
      productId: trimmedProductId,
      userId: trimmedUserId,
      viewDate: new Date(now),
      created: `${now}`,
      updated: `${now}`,
    });
    await record.save();

    return response({
      data: record,
      req,
      res,
    });
  } catch {
    return response({
      info: 'INTERNAL_SERVER_ERROR',
      status: 500,
      req,
      res,
    });
  }
};
