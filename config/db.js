const DB_URL =
  "mongodb+srv://ricardo:senhateste@cluster0.cljbp.mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
  connect: () => {
    return mongoose.createConnection(DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  },
};
