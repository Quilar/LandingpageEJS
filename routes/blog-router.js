const express = require('express');
const fs = require('fs');
const app = express();
const blogRouter = express.Router();
const blogController = require('../controllers/blog-controller.js');


blogRouter.get('/', blogController.blogs);
blogRouter.get('/:id', blogController.markupBlog);

module.exports = blogRouter