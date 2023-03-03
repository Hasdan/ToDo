const express = require("express");
const app = express();
const port = 3000;
const ToDoRouter = require("./routes/ToDo");


app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Main Route to confirm site is available
app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

// Get all ToDos
app.use("/to-dos", ToDoRouter);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});