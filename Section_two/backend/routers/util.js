const multer = require('multer');
const express = require('express');
const path = require('path');
const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads'); // Save the uploaded files to the 'uploads' folder
   },
   filename: (req, file, cb) => {
      // Save the file with its original name
      const originalName = file.originalname;
      cb(null, originalName); // Use the original filename
   }
});

const uploader = multer({ storage: storage });

// File upload route
router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
   if (req.file) {
      // Return only the original filename (no modifications)
      res.json({ message: 'File uploaded successfully', fileName: req.file.originalname });
   } else {
      res.status(400).json({ message: 'No file uploaded' });
   }
});

module.exports = router;
