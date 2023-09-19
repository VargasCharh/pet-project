import express from 'express';
import { UserQuestion } from '../../db/models';

const apiNewQuestionRouter = express.Router();

apiNewQuestionRouter.post('/', async (req, res) => {
  try {
    const { question, answer, company } = req.body;
    const userQuestion = await UserQuestion.create({
      userQuestion: question,
      userId: req.session.user.id,
      userCorrectAnswer: answer,
      userCompany: company,
    });
    res.json(userQuestion);
  } catch (error) {
    console.log(error);
  }
});

apiNewQuestionRouter.get('/', async (req, res) => {
  try {
    const allQuestions = await UserQuestion.findAll();
    res.json(allQuestions);
  } catch (error) {
    console.log('error');
  }
});

apiNewQuestionRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletedQuestion = await UserQuestion.destroy({ where: { id } });
    res.json(deletedQuestion).status(200);
  } catch (error) {
    console.log(error);
  }
});

export default apiNewQuestionRouter;
