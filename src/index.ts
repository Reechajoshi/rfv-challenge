import express, { Request, Response, NextFunction } from "express";
import path from "path";
const MESSAGEPREFIX = "RealFace";
let MESSAGE=MESSAGEPREFIX;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

app.get('/api', (req, res) => {
  res.send(MESSAGE);
});

app.put('/api/:message', (req, res) => {
  MESSAGE=MESSAGEPREFIX+req.params.message;
  res.send(MESSAGE);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
