//our job is to add additional routes which we can call from the frontend
import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js'

dotenv.config(); //to make sure that our environment variables are getting populated 

//we have to create a new instance of the router 
const router = express.Router();

export default router;