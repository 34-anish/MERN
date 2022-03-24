const router = require("express").Router();
const User = require("../models/User");
//Register
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "shyam",
    email: "shyam@gmail.com",
    password: 1234566,
  });
  await user.save();
  res.send("OK ");
});
module.exports = router;
