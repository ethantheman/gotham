const express = require("express");
const multer = require("multer");
const path = require("path");
const axios = require('axios');
const form = multer();
const fields = form.fields([{name: 'fileName', maxCount: 1}, {name: 'file', maxCount: 1}]);
const headlight_api_path = "https://www.headlightlabs.com/api/gcpd_lookup/";
const api_key = "0dRRxFID0bIrvF-f46x4sA";

const app = express();

//Send static files
app.use(express.static(__dirname + "/public"));

app.get("/api/test", (req, res) => {
  res.send({ test: "testing" });
});

app.post('/api/images', fields, (req, res) => {
	const imageBuffer = req.files.file[0].buffer;
	const type = req.files.file[0].type;
	
	let image_contents = `data:${type};base64,` + Buffer.from(imageBuffer).toString('base64');
	let data = {api_key, image_contents};

	axios.post(headlight_api_path, data).then(response => {
		res.send(response.data);
	}).catch(err => {
		res.send('error :(');
	})
	
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
