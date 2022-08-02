import { Sequelize } from "sequelize";

const db = new  Sequelize("mern_db", "root", "vertrigo",{
    host:"localhost",
    dialect: "mysql"
});

export default db;