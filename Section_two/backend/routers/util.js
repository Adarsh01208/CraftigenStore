const multer = require('multer');
const express = require('express');
const router = express.Router();

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads');
   },
   filename: (req, file, cb) => {
      
      cb(null, file.originalname)
   }
});

const uploader = multer({ storage: storage });

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
   res.json({ message: 'file uploaded Successfully' })
});
module.exports = router;