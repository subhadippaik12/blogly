const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogControlller");

//router object
const router = express.Router();

//routes
// GET || all blogs
router.get("https://blogly-backend.onrender.com//all-blog", getAllBlogsController);

//POST || create blog
router.post("https://blogly-backend.onrender.com//create-blog", createBlogController);

//PUT || update blog
router.put("https://blogly-backend.onrender.com//update-blog/:id", updateBlogController);

//GET || SIngle Blog Details
router.get("https://blogly-backend.onrender.com//get-blog/:id", getBlogByIdController);

//DELETE || delete blog
router.delete("https://blogly-backend.onrender.com//delete-blog/:id", deleteBlogController);

//GET || user blog
router.get("https://blogly-backend.onrender.com//user-blog/:id", userBlogControlller);

module.exports = router;
