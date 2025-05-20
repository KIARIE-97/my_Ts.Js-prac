//extract from dotenv file
import dotenv from 'dotenv';
import path from 'path';

//load the environment variables
const result = dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});

if (result.error) {
    console.log('error loading .env:', result.error);
}

export default {
	database: {
		host: process.env.PGHOST || "localhost",
		port: parseInt(process.env.PGPORT || "5432", 10),
		user: process.env.PGUSER || "postgres",
		password: process.env.PGPASSWORD || "",
		database: process.env.PGDATABASE || "products",
	},
};