const express = require("express");
const body_parser = require('body-parser');
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

// Configure body parser middleware
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// Configure cors
app.use(cors());


// Example GET request.
app.get("/api", (req,res) => {
	res.json({ message: "Hello!!!"});
	console.log("got a post request");
})

// Example POST request.
app.post("/SubmitInputText", (req, res) => {
	console.log(req.body);
	res.json({ message: "text submitted."});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
