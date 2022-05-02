const { v4 } = require('uuid');
module.exports = (model) => {
  const getAll = ({ attributes = ['*'], condition = {}, order = [] } = {}) =>
    model.findAll({
      attributes: attributes,
      where: condition,
      order: order,
      raw: true
    });
  
  const get = (fields) => model.findOne({ where: fields, raw: true });

  const create = async (data) =>
    model.create({ id: v4(), ...data }).catch((e) => 
      console.log(`error when creating row: ${e}`));

  const update = (data, id) => model.update(data, { where: { id }, raw: true });
  
  const destroy = (id) => model.destroy({ where: { id } });

  return {
    getAll,
    get,
    create,
    update,
    destroy
  };
};
