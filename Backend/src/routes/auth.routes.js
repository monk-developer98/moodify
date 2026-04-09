const {Router} = require("express");
const { registerUser, loginUser, getMe, logOutUser } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware")
const router = Router();


router.post("/register",registerUser)
router.post("/login",loginUser)

router.get("/get-me", authMiddleware.authUser , getMe)
router.get("/logout", authMiddleware.authUser , logOutUser)

module.exports = router;