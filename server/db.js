import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "us-cdbr-east-06.cleardb.net",
  port: 3306,
  user: "b80974307d0423",
  password: "3d35f26b",
  database: "heroku_5831f264c5486c9",
});

//mysql://b80974307d0423:3d35f26b@us-cdbr-east-06.cleardb.net/heroku_5831f264c5486c9?reconnect=true
