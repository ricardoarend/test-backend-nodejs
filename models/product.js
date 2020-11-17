const struct = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },  
});

module.exports = db.model("product", struct);
