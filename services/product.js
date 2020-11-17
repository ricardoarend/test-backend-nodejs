const productModel = require("../models/product");

module.exports = prodServices = {
  /**
  * @name create - cria um produto novo no banco de dados
  *
  * @param {String} title - titulo do produto
  * @param {String} description - descrição do produto
  * @param {String} price - preço do produto
  * @param {String} category - categoria do produto
  *
  * @returns {Promise}
  */  
  create: (title, description, price, category) => {
    return new Promise((resolve, reject) => {
      const newProduct = new productModel({
        title,
        description,
        price,
        category,
      }).save();
      newProduct
        .then((info) => {
          resolve(info);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
    /**
  * @name getAll - retorna um array com todos os produtos
  * * 
  *
  * @returns {Promise}
  */  
  getAll: () => {
    return productModel.find({}).lean();
  },
   /**
  * @name delete - deleta um produto a partir do Id
  * * 
  *
  * @returns {Promise}
  */ 
  delete: (product) => {
    return productModel.deleteOne({ _id: product }).exec();
  },
   /**
  * @name getByFilter - lista um produto a partir do nome ou categoria
  * * 
  *
  * @returns {Promise}
  */ 
  getByFilter: (filter) => {
    return productModel.find( filter ).lean();
  },
   /**
  * @name update - realiza a atualização dos dados de um produto
  * * 
  *
  * @returns {Promise}
  */ 
  update: (obj) => {
    return productModel
      .findOneAndUpdate(
        { _id: obj.prodId },
        {
          ...obj,
        }
      )
      .exec();
  },
};
