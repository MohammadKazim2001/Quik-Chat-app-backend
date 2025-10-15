import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // must be api_key
  api_secret: process.env.CLOUDINARY_API_SECRET, // must be api_secret
  secure: true,
});

export default cloudinary;
