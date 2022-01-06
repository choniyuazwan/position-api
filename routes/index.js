const { Router } = require("express");
const userController = require("../controllers/users");
const positionController = require("../controllers/positions");
const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, "yourSecretKey");


router.post("/users/register", userController.create);
router.post("/users/login", userController.login);
protectedRouter.get("/users", userController.getAll);
protectedRouter.get("/users/:id", userController.get);

protectedRouter.get("/positions", positionController.getAll);
protectedRouter.get("/positions/:id", positionController.get);

module.exports = router;
