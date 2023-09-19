import express from 'express';
import { Company, TheoryQuestion, AnswerTheory } from '../../db/models';

const apiAdminQuestionRouter = express.Router();

apiAdminQuestionRouter.post('/', async (req, res) => {
  try {
    const { editedQuestion, editedAnswer, editedCompany } = req.body;

    const [newCompany] = await Company.findOrCreate({
      where: { name: editedCompany },
      defaults: { img: undefined },
    });

    const newTheoryQuestion = await TheoryQuestion.create({
      questionTeory: editedQuestion,
      companyId: newCompany.id,
    });

    const answersArr = Object.keys(editedAnswer);

    const answerList = answersArr.map((el) => ({
      answerTheoryOnQuestion: editedAnswer[el],
      isCorrect: el === 'correctAnswer',
      questionTeoryId: newTheoryQuestion.id,
      points: el === 'correctAnswer' ? 20 : 0,
    }));

    await AnswerTheory.bulkCreate(answerList);
    res.json(answerList);
  } catch (error) {
    console.log(error);
  }
});

// apiAdminQuestionRouter.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     await TheoryQuestion.destroy({ where: { id } });
//   } catch (error) {
//     console.log(error);
//   }
// });

export default apiAdminQuestionRouter;
