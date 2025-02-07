const { GoogleGenerativeAI } = require("@google/generative-ai");
const expressAsyncHandler = require("express-async-handler");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are expert dietician and fitness trainer",
});

const generatePlan = expressAsyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, goal, weight, height, prefrence } = req.body;

  if (!name || !goal || !weight || !height || !prefrence) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  const prompt = `my name is ${name} and my fitness goal is to ${goal} and my current height is ${height} ft and my weight is ${weight} kgs and i am ${prefrence} give me customised fitness plan response should be in html`;

  const result = await model.generateContent(prompt);

  res.json({
    plan: result.response.text(),
  });
});

module.exports = { generatePlan };
