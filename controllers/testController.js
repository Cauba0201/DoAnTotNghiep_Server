const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTestPing = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({ error: "Name is requered" });
    }

    const newTestPing = await prisma.testPing.create({
      data: {
        name: req.body.name,
      },
    });

    return res.status(201).json(newTestPing);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTestPing = async (req, res) => {
  try {
    const test = await prisma.testPing.findMany();
    return res.status(200).json(test);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
