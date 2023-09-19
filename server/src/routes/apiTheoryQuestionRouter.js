import express from 'express';
import { TheoryQuestion, AnswerTheory, User, UserAnswerTheory, Company } from '../../db/models';

const apiTheoryQuestionRouter = express.Router();

apiTheoryQuestionRouter.get('/', async (req, res) => {
  try {
    const theoryQuestions = await TheoryQuestion.findAll({
      include: {
        model: AnswerTheory,
      },
    });
    res.json(theoryQuestions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiTheoryQuestionRouter.get('/question', async (req, res) => {
  try {
    const usersQuestions = await TheoryQuestion.findAll({
      where: {
        '$Users->UserAnswerTheories.user_id$': null,
      },
      include: [
        {
          required: false,
          model: User,
          where: { id: 1 },
          // where: { id: req.session.user.id },
        },
        {
          model: AnswerTheory,
        },
      ],
    });
    res.json(usersQuestions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ! открываем выбор компаний
apiTheoryQuestionRouter.get('/companies', async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies).status(200);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ! квиз с вопросами конкретной компании
// apiTheoryQuestionRouter.get('/companies/:companyId/questions', async (req, res) => {
//   const { companyId } = req.params;
//   try {
//     const usersQuestionsByCompany = await TheoryQuestion.findAll({
//       where: {
//         '$Users->UserAnswerTheories.user_id$': null,
//       },
//       include: [
//         {
//           required: false,
//           model: User,
//           where: { id: 1 },
//           // where: { id: req.session.user.id },
//         },
//         {
//           model: AnswerTheory,
//         },
//         {
//           model: Company,
//           where: { id: companyId },
//         },
//       ],
//     });
//     res.json(usersQuestionsByCompany);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

apiTheoryQuestionRouter.get('/companies/:companyId/questions', async (req, res) => {
  const { companyId } = req.params;
  try {
    const usersQuestionsByCompany = await TheoryQuestion.findAll({
      where: {
        '$Users->UserAnswerTheories.user_id$': null,
      },
      include: [
        {
          required: false,
          model: User,
          where: { id: 1 },
        },
        {
          model: AnswerTheory,
        },
        {
          model: Company,
          where: { id: companyId },
        },
      ],
    });

    const questionsWithShuffledAnswers = usersQuestionsByCompany.map((question) => {
      const answers = question.AnswerTheories;
      const shuffledAnswers = shuffleArray(answers);
      return { ...question.toJSON(), AnswerTheories: shuffledAnswers };
    });

    res.json(questionsWithShuffledAnswers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// apiTheoryQuestionRouter.get('/score', async (req, res) => {
//   try {
//     console.log(req.session.user.id);
//     const user = await User.findOne({
//       where: {
//         id: req.session.user.id,
//       },
//     });
//     console.log(user);
//     const correctAnswers = await UserAnswerTheory.findAll({
//       where: {
//         user_id: req.session.user.id,
//       },
//     });

//     user.score = correctAnswers.length * 20;

//     await user.save();
//     res.json(correctAnswers);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// ! получаем ответ
apiTheoryQuestionRouter.post('/validate', async (req, res) => {
  const { answer } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id: req.session.user.id,
      },
    });
    if (answer.isCorrect) {
      user.score += 20;
      await user.save();
      // await UserAnswerTheory.create({
      //   user_id: req.session.user.id,
      //   question_id: answer.questionTeoryId,
      //   result: answer.isCorrect,
      // });
    }
    res.json({});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default apiTheoryQuestionRouter;
