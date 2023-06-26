// 1
const mongoose = require("mongoose");

// 2 connect DB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log("Database connected ...");
	} catch (error) {
		console.log("Can not connected !!! ", error);
	}
};

// 3
module.exports = connectDB;
