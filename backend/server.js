import express from "express";
import data from "./data.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(fileUpload());

app.get("/api/users", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.post("/uploads", (req, res) => {
  console.log(req.body);
  // console.log(req.files.file);
  res.send(req.body);
});
// app.post("/uploads", (req, res) => {
//   if (req === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const file = req.files.file;
//   file.mv(
//     `C:/Users/User/Desktop/server/frontend/public/images/${file.name}`,
//     (err) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send(err);
//       }
//       res.json({ fileName: file.name, filePath: `/images/${file.name}` });
//     }
//   );
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
