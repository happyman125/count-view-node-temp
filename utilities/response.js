/**
 * Send response
 * @param {*} data - optional data for the response
 * @param {string} info - response info
 * @param {number} status - response status
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {void}
 */
module.exports = ({
  data = null,
  info = 'OK',
  status = 200,
  req,
  res,
}) => {
  const response = {
    datetime: Date.now(),
    info,
    request: `${req.originalUrl} [${req.method}]`,
    status,
  };

  if (data) {
    response.data = data;
  }

  return res.status(status).send(response);
};
