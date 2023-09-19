import express from 'express';
import {User} from '../../db/models/user'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users);
  }catch(error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
  
})
export default router;
