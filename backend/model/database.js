const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
createConnection: function() {
    const connectionPool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEME
        });
    return connectionPool;
    },
insertData(path,activeClip){
    const connection = this.createConnection();
    const query = `INSERT INTO resolum.clips (clip_path, current_active) VALUES (?,?)`;
    const params = [path,activeClip];
    connection.query(query,params);
}
}


