import { initializeTables } from "./config/database.js";
import { insertoneUser, allUsers, deleteoneUser } from "./examples/queries.js";

//self executing asyn function to run imported code
(async () => {
	try {
		//operations
		//1. create table if dont exist
		// await initializeTables();
    //2. insert a user
	// const user_id = await insertoneUser({ fname: 'John', lname: 'Doe', age: 30, created_at: new Date() });
  //get all users
  const user = await allUsers();
  console.table( user);

  //delete a user
//   const deletedUser = await deleteoneUser(16);
//  console.log('deleted user is;', deletedUser);

	} catch (error) {
		console.error("Error executing database operations:", error);
	}
})();
