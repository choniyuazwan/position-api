const axios = require('axios');

async function getAll(req, res) {
  let url = await req.protocol + '://' + req.get('host') + req.originalUrl;
  let suffix = await url.split('positions')

  try {
    const response = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json'+suffix[1]);
    res.json({
      data: response.data
    });
  } catch (error) {
    console.error(error);
    res.json({
      data: [],
      message: 'something error'
    });
  }
}

async function get(req, res) {
  let url = await req.protocol + '://' + req.get('host') + req.originalUrl;
  let suffix = await url.split('positions')

  try {
    const response = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions'+suffix[1]);
    res.json({
      data: response.data
    });
  } catch (error) {
    console.error(error);
    res.json({
      data: null,
      message: 'something error'
    });
  }
}

module.exports = {
  getAll,
  get
}
