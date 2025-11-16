const express = require("express");
const router = express.Router();
const {
  getContact,
  CreateContact,
  getParticularContact,
  UpdateContact,
  DeleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(CreateContact);
router
  .route("/:id")
  .get(getParticularContact)
  .put(UpdateContact)
  .delete(DeleteContact);

module.exports = router;
