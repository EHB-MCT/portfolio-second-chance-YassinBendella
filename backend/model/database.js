const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    /**
     * This function will create a database connection assuming that all the information needed is 
     * in the .env file
     * @returns The database connection
     */
    createConnection: function() {
        const connectionPool = mysql.createPool({
            host: process.env.DB_HOST, // address of the server
            user: process.env.DB_USER, // name of the user
            password: process.env.DB_PASSWORD, // password of the user
            database: process.env.DB_SCHEME // name of database to connect to
            });
        return connectionPool;
    },
    
    /**
     * This fuction will insert a new clip into the database
     * @param {string} path - The path of the clip to insert 
     * @param {string} activeClip - the name of the clip to insert
     */
    
    insertData(path,activeClip){
        const connection = this.createConnection();
        const query = `INSERT INTO resolum.clips (clip_path, current_active) VALUES (?,?)`;
        const params = [path,activeClip];
        connection.query(query,params);
    }
}


