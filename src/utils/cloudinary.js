import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("Cloudinary ENV not loaded properly");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath)

    return response;
  } catch (err) {
    if (localFilePath) fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
