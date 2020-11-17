const productModel = require("../models/product");

module.exports = prodServices = {
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
  getAll: () => {
    return productModel.find({}).lean();
  },
  delete: (product) => {
    return productModel.deleteOne({ _id: product }).exec();
  },
  getByFilter: (filter) => {
    return productModel.find( filter ).lean();
  },
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
