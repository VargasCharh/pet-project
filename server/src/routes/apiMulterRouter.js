const apiMulterRouter = require('express').Router();
const fs = require('fs').promises;
const sharp = require('sharp');
const { User } = require('../../db/models');
const upload = require('../middleware/multerMW');


apiMulterRouter.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  try {
    
    const name = `${Date.now()}.webp`;
    
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    
    await fs.writeFile(`./public/img/${name}`, outputBuffer);
    
    const post = await User.create({
      title: req.body.title,
      img: name,
    });
    
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

apiMulterRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!id || Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'Bad request id' });
    return;
  }
  try {
    const post = await User.findOne({
      id: req.params.id,
    });
    if (!post) {
      res.status(400).json({ message: 'post not found' });
      return;
    }
    fs.unlink(`./public/img/${post.img}`).catch((e) => console.log(e));
    await post.destroy();
    res.json({ message: 'Post deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = apiMulterRouter;
