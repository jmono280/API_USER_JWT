/**
 * Registers a new user.
 *
 * @route POST /register
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { StoryController } from "./controllers/StoryController";
import { AuthController } from "./controllers/AuthController";
import { authMiddleware } from "./middlewares/authMiddleware";

const router = Router();
const userController = new UserController();
const storyController = new StoryController();
const authController = new AuthController();

router.post("/register", (req, res) => authController.register(req, res));
router.post("/login", (req, res) => authController.login(req, res));

// router.post("/users", authMiddleware, (req, res) =>
//   userController.createUser(req, res)
// );

// Route to get a specific user by their ID
router.post("/userst", authMiddleware, (req, res) =>
  userController.getUserById(req, res)
);

// Route to get all users
router.get("/users", authMiddleware, (req, res) =>
  userController.getAllUsers(req, res)
);

// Route to create a new story by user
router.post("/stories", authMiddleware, (req, res) =>
  storyController.createStory(req, res)
);

// Route to edit a story
router.put("/stories/story/edit", authMiddleware, (req, res) =>
  storyController.editStory(req, res)
);

// Route to delete a story
router.delete("/stories/story/delete", authMiddleware, (req, res) =>
  storyController.deleteStory(req, res)
);

// Route to get stories by user ID
router.post("/stories/user", authMiddleware, (req, res) =>
  storyController.getStoriesByUserId(req, res)
);

// Route to get stories by story ID
router.post("/stories/story", authMiddleware, (req, res) =>
  storyController.getStoriesByStoryId(req, res)
);

export default router;
