import db, { executeQuery } from "../config/database.js";

//have a user interface 
export interface TUser {
    id?: number;
    fname: string;
    lname: string;
    age: number;
    created_at: Date;
}

//create a single user
export const insertoneUser = async (user: TUser): Promise<number | undefined> => {
    try {
        const res = await executeQuery(
            `INSERT INTO users (fname, lname, age) VALUES ($1, $2, $3) RETURNING id`,
            [user.fname, user.lname, user.age]
        );
        const user_id = res.rows[0]?.id;
        console.log(`User inserted with ID: ${user_id}`);
        return user_id;
    } catch(err) {
        console.error("Error inserting user:", err);
        throw err;
    }
}

//query all users
export const allUsers = async(): Promise<TUser[]> => {
    try {
        const res = await executeQuery('SELECT * FROM users');
        console.log(`Retrieved ${res.rows.length} users`);
        return res.rows as TUser[];
    } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
    }
}

export const deleteoneUser = async (id : number): Promise<number | undefined> => {
    try {
        const res = await executeQuery(
            `DELETE FROM users WHERE id = $1 RETURNING id`,
            [id]
        );
        const user_id = res.rows[0]?.id;
        console.log(`User deleted with ID: ${user_id}`);
        return user_id;
    } catch(err) {
        console.error("Error deleting user:", err);
        throw err;
    }
}