const router = express.Router();
const productControler = require("../controllers/product");

router.post("/create", productControler.create);
router.get("/getprod", productControler.getAll);
router.delete("/deleteprod", productControler.delete);
router.get("/getfilter", productControler.getByFilter);
router.put("/update", productControler.update);
module.exports = router;