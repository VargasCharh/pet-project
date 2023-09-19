import express from 'express';
import { Post, Comment, User, Company } from '../../db/models'

const apiForumRouter = express.Router();

apiForumRouter.get('/posts', async (req, res) => {
  try {
    const postsComments = await Post.findAll({
      include: [
        { model: Comment, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }] },
        { model: User, attributes: ['id', 'name', 'email', 'avatar'] },
        { model: Company }
      ],
      order: [['createdAt', 'DESC']] 
    });
    res.json(postsComments).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

apiForumRouter.get('/posts/companies', async (req, res) => {
 try {
   const companies = await Company.findAll();
   res.json(companies).status(200);
 } catch (error) {
      console.error(error);
    res.sendStatus(500);
 }
})

apiForumRouter.post('/posts/companies/', async (req, res) => {
  const {title, body, companyId} = req.body;
  try {
    const createdPost = await Post.create({title, body, companyId, userId: req.session?.user?.id});
    const findeNewPost = await Post.findOne({ where: { id: createdPost.id }, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }, { model: Company }, {model: Comment, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }]}] });
    res.json(findeNewPost).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
 })

 apiForumRouter.route('/posts/companies/:id')
 .patch(async (req, res) => {
   const { title, body, companyId } = req.body;
   try {
     await Post.update({ title, body, companyId }, { where: { id: req.params.id, userId: req.session?.user?.id } });
     const findNewTodo = await Post.findOne({ where: { id: req.params.id }, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }, { model: Company }, {model: Comment, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }]}] });
     res.json(findNewTodo).status(200);
   } catch (error) {
     console.error(error);
     res.sendStatus(500);
   }
 })
 .delete(async (req, res) => {
  try {
    const deletePost = await Post.destroy({ where: { id: req.params.id } });
    res.json(deletePost).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

apiForumRouter.post('/comments/:id', async (req, res) => {
  const {data, id} = req.body
 try {
   const newComment = await Comment.create({body: data, postId: id , userId: req.session?.user?.id}, { where: { id: req.params.id, userId: req.session?.user?.id } });
   const findeNewComment = await Comment.findOne({ where: { id: newComment.id }, include: [{ model: User, attributes: ['id', 'name', 'email', 'avatar'] }, {model: Post, include: [{model: Company}]}] });
  res.json(findeNewComment).status(200);
 } catch (error) {
  console.error(error);
  res.sendStatus(500);
 }
})

export default apiForumRouter;
