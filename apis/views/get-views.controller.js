const moment = require('moment');

const database = require('../../database');
const { DATE_FORMAT } = require('../../configuration');
const response = require('../../utilities/response');

/**
 * Get views
 * @param req {object} - request object
 * @param res {object} - response object
 * @returns {Promise<void>}
 */
module.exports = async (req, res) => {
  try {
    // check product ID
    const { id = '' } = req.params;
    if (!id) {
      return response({
        info: 'MISSING_PRODUCT_ID',
        status: 400,
        req,
        res,
      });
    }

    const query = {
      productId: id,
    };

    // check time interval
    const { start = '', end = '' } = req.query;
    if (start && moment(start, DATE_FORMAT, true).isValid()) {
      query.viewDate = {
        $gte: new Date(start),
      };
    }
    if (end && moment(end, DATE_FORMAT, true).isValid()) {
      query.viewDate = {
        ...query.viewDate,
        $lte: new Date(end),
      };
    }

    // count total results
    const total = await database.ViewCount.countDocuments(query);

    // count unique results
    const unique = await database.ViewCount.distinct('userId', query);

    return response({
      data: {
        productId: id,
        totalCount: total,
        uniqueCount: unique.length,
      },
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
