const express = require("express");
const app = express();
const connection = require("./database/databaseConnection");
const PORT = 3001;
const tutors = require("./models/tutores.js");
const pets = require("./models/pets.js");

app.use(express.json());

app.get("/tutors", async (req, res) => {
  try {
    const tutorsComPets = await tutors.findAll({
      include: [{ model: pets, as: "pets" }],
    });
    res.json(tutorsComPets);
  } catch (error) {
    console.error("Erro ao obter tutores e seus pets:", error);
    res
      .status(500)
      .json({ error: "Ocorreu um erro ao processar sua solicitação" });
  }
});

app.post("/pets/:tutorId", async (req, res) => {
  try {
    const tutorId = req.params.tutorId;
    const petData = req.body;
    petData.tutor_id = tutorId;
    const novoPet = await pets.create(petData);

    res
      .status(201)
      .json({ message: "Pet cadastrado com sucesso", pet: novoPet });
  } catch (error) {
    console.error("Erro ao cadastrar pet:", error);
    res.status(500).json("Ocorreu um erro ao processar sua solicitação");
  }
});

app.post("/tutors", async (req, res) => {
  try {
    const tutorData = req.body;
    const novoTutor = await tutors.create(tutorData);

    res
      .status(201)
      .json({ message: "Tutor cadastrado com sucesso", tutor: novoTutor });
  } catch (error) {
    console.error("Erro ao cadastrar Tutor:", error);
    res.status(500).json("Ocorreu um erro ao processar sua solicitação");
  }
});

app.put("/tutor/:id", async (req, res) => {
  const tutorId = req.params.id;
  const novosDados = req.body;

  try {
    const tutor = await tutors.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).send("Tutor não encontrado");
    }
    await tutor.update(novosDados);

    res.send("Tutor atualizado com sucesso");
  } catch (error) {
    console.error("Erro ao atualizar tutor:", error);
    res.status(500).send("Ocorreu um erro ao processar sua solicitação");
  }
});

app.put("/pet/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;
  const novosDados1 = req.body;
  const novosDados2 = req.body;

  try {
    const pet = await pets.findByPk(petId);
    const tutor = await tutors.findByPk(tutorId);
    if (!pet || !tutor) {
      return res.status(404).send("Pet ou tutor não encontrado");
    }
    await pet.update(novosDados1);
    await tutor.update(novosDados2);

    res.send("Pet e tutor atualizados com sucesso");
  } catch (error) {
    console.error("Erro ao atualizar Pet e tutor:", error);
    res.status(500).send("Ocorreu um erro ao processar sua solicitação");
  }
});

app.delete("/tutor/:id", async (req, res) => {
  const tutorId = req.params.id;

  try {
    const tutor = await tutors.findByPk(tutorId);

    if (!tutor) {
      return res.status(404).send("Tutor não encontrado");
    }

    await tutor.destroy();

    res.status(200).send("Tutor foi excluído com sucesso");
  } catch (error) {
    console.error("Erro ao excluir tutor:", error);
    res.status(500).send("Ocorreu um erro ao processar sua solicitação");
  }
});

app.delete("/pet/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;

  try {
    const pet = await pets.findByPk(petId);
    if (!pet) {
      return res.status(404).send("Pet não encontrado");
    }

    await pet.destroy();

    res.send("Pet excluído com sucesso");
  } catch (error) {
    console.error("Erro ao excluir pet:", error);
    res.status(500).send("Ocorreu um erro ao processar sua solicitação");
  }
});

connection.sync().then(() => {
  console.log("Conexão com o banco de dados estabelecida com sucesso");

  app.listen(PORT, () => {
    console.log(`O Express está rodando na porta ${PORT}`);
  });
});
