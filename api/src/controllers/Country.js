/*  Métodos GET del modelo COUNTRY */

const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

//GET COUNTRY x ID
const getCountryxID = async (req, res, next) => {
  const { id } = req.params; // -> si me llega 1 pais x query
  const response = await Country.findByPk(id.toUpperCase(), {
    include: Activity,
  });
  if (!response) {
    return res
      .status(404)
      .send(`Id ${id} does not correspond to an existing country`);
  }
  res.status(201).json(response);
};

//GET COUNTRIES
const getCountries = async (req, res) => {
  const { name } = req.query; // -> si llega nombre de pais x query
  const { filter } = req.query; // -> si llega filtro
  if (name) {
    const response = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%", // -> si contiene name
        },
      },
      order: [["name", "ASC"]],
    });
    if (response.length === 0) {
      return res
        .status(404)
        .send(`Name ${name} does not correspond to any existing country`);
    }
    res.status(201).json(response);
  } else if (filter) {
    const response = await Country.findAll({
      where: {
        [Op.or]: [
          {
            subregion: {
              [Op.iLike]: "%" + filter + "%", // -> si contiene filter
            },
          },
          {
            continent: {
              [Op.iLike]: "%" + filter + "%", // -> si contiene filter
            },
          },
        ],
      },
      order: [["name", "ASC"]],
    });
    if (response.length === 0) {
      return res.status(404).send(`Cannot apply filter ${filter}`);
    }
    res.status(201).json(response);
  } else {
    const response = await Country.findAll({
      limit: 250,
      offset: req.query.page ? req.query.page : 0,
      order: [["name", req.query.order ? req.query.order : "ASC"]],
      include: { model: Activity },
    });
    if (response.length === 0) {
      console.log("Error:", error);
    }
    res.status(201).json(response);
  }
};

module.exports = {
  getCountryxID,
  getCountries,
};