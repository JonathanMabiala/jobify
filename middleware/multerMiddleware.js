import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const filName = file.originalname;
    cb(null, filName);
  },
});

const upload = multer({ storage });


export default upload;