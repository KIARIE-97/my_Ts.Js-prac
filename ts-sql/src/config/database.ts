import env from './env.js'
import { Pool, PoolConfig, QueryResult } from 'pg'

class Database {
    private pool: Pool;

    constructor() {
        const poolConfig: PoolConfig = {
					host: env.database.host,
					port: env.database.port,
					user: env.database.user,
					password: env.database.password,
					database: env.database.database,
					max: 20,
					idleTimeoutMillis: 30000,
					connectionTimeoutMillis: 5000,
				};
                this.pool = new Pool(poolConfig);
                this.pool.on ('connect', () => {
                    console.log('connected to postgreSQL database');
                });
                this.pool.on("error", (err) => {
		    		console.error("Unexpected error on idle client", err);
						process.exit(-1);
								});

    }
    //the below function is used to execute a query
    // it takes a string and an array of parameters
    async executeQuery(text: string, params: any[] = []): Promise<QueryResult>{
       const client = await this.pool.connect();
       try {
					// start the timer
					const start = Date.now();
					const result = await client.query(text, params);
					const duration = Date.now() - start;
					console.log(
						"executed query: ${text} with params: ${params} in ${duration}ms`"
					);
					return result;
				} catch (error) {
					console.error("Database query error:", error);
					throw error;
				} finally {
					client.release();
				}
    }
    async initializeTables(): Promise<void> {
        try{
            //create users table
            await this.executeQuery(`
                  CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    fname VARCHAR(50) NOT NULL,
                    lname VARCHAR(50) NOT NULL,
                    age INT,
                    created_at TIMESTAMPTZ DEFAULT NOW()
                );
                `);
                console.log('users table created or alredy exists');
        } catch (err) {
            console.error('Error initializing database', err);
            throw err;
        }
    }
    getPool(): Pool {
        return this.pool;
    }
}
// create a singleton instance of the Database class- this will ensure that only one instance of the database connection is created and used throughout the application
const db = new Database();

// export instance methods and database object
export const executeQuery = (text: string, params: any[] = []) =>  db.executeQuery(text, params);
export const initializeTables = () => db.initializeTables();
export default db;
