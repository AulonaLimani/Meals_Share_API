import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Meal } from "./Entities/Meal";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "food_app",
    username: "root",
    password: "root",
    logging: true, // log the sql statements when they are executed
    synchronize: false,
    entities: [Meal],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
