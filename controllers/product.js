const prodServices = require("../services/product.js");
const { reject } = require("q");

module.exports = prodControler = {
  create: (req, res) => {
    const {
      title,
      description,
      price,
      category,      
    } = req.body;
    prodServices
      .create(title, description, price, category)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "fail" + err,
        });
      });
  },
  getAll: (req, res) => {
    prodServices
      .getAll()
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "fail" + err,
        });
      });
  },
  delete: (req, res) => {
    const prodId = req.body.prodId;
    prodServices
      .delete(prodId)
      .then(() => {
        res.json({
          success: true,          
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "fail" + err,
        });
      });
  },
  getByFilter: (req, res) => {
    let filter = { };
    if(req.body.category){
      filter.category=req.body.category    
    }else{
      filter.title=req.body.title
    } 
    prodServices
      .getByFilter(filter)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "fail" + err,
        });
      });
  },
  update: (req, res) => {
    const obj = {
      prodId: req.body.prodId, 
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,       
    };
    prodServices
      .update(obj)
      .then((info) => {
        res.json({
          success: true,
          data: info,
        });
      })
      .catch((err) => {
        res.json({
          success: false,
          message: "fail" + err,
        });
      });
  },
};