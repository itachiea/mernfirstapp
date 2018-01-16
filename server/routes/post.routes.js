/* jshint esversion: 6 */
import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

// Update a post by cuid
router.route('/posts/:cuid').put(PostController.editPost);

// Update votes o post by cuid (up)
router.route('/posts/:cuid/up').put(PostController.thumbUp);

// Update votes o post by cuid (down)
router.route('/posts/:cuid/down').put(PostController.thumbDown);

export default router;
