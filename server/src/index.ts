import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./Schema";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req: any, file: any, cb: any) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      new Error(
        "Error: File upload only supports the following filetypes - " +
          filetypes
      )
    );
  },
});

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(uploadDir));

  app.post("/upload/meals", upload.single("image"), (req, res) => {
    if (req.file) {
      const fileUrl = `http://localhost:3001/${req.file.filename}`;
      return res.json({ fileName: req.file.filename, fileUrl });
    }
    return res.status(400).send("No file uploaded.");
  });

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
