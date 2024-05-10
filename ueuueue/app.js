const express = require("express");
const app = express();
const Connection = require("./database/databaseConnection");
const PORT = 3001;
const tutores = require("./models/tutores");

async function createTutors() {
  return await tutores.create({
    name: "Jonas",
    phone: "85989323895",
    email: "jonas@paidepet.com",
    date_of_birth: "1993-12-12 10:10",
    zip_code: "61760000",
  });
}

createTutors();

Connection.sync().then(() => {
  console.log("conectou no banco");
});
app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

//usa o create aqui p testar
// as oficiais msm cria nas rotas
