import { renderContent } from "./renderContent";

const path = require("path");
const express = require("express");
const router = express.Router();

const app = express();

const PORT = process.env.PORT || 8080;

router.use("^/$", renderContent);
router.use(express.static(path.join(__dirname, "../build")));

app.use(router);
app.listen(PORT, () => {
  console.log(`listen server: http://localhost:${PORT}`);
});
