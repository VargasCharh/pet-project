import express from 'express';
import {DreamTeam} from '../../db/models'


const apiTeamRouter = express.Router();

apiTeamRouter.get('/', async (req, res) => {
  try {
    const usersForTop = await DreamTeam.findAll();
    res.json(usersForTop).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

export default apiTeamRouter;