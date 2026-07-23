const router = require("express").Router();
const {
  createClothingItem,
  deleteClothingItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const { validateCardBody, validateId } = require("../middlewares/validation");

router.post("/", validateCardBody, createClothingItem);
router.delete("/:id", validateId, deleteClothingItem);
router.put("/:id/likes", validateId, likeItem);
router.delete("/:id/likes", validateId, dislikeItem);

module.exports = router;
