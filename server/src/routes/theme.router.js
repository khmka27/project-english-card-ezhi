const express = require('express');
const themeRouter = express.Router();
const { Theme } = require('../../db/models');
const fs = require('fs/promises');
const sharp = require('sharp');
const upload = require('../middlewares/multer');

themeRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const themes = await Theme.findAll();
      res.json(themes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Внутренняя ошибка сервера');
    }
  })
  .post(upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Нет файла' });
      }
      const { nameTheme } = req.body;

      if (!nameTheme) {
        return res.status(400).send('Все поля обязательны для заполнения.');
      }
      const name = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/${name}`, outputBuffer);

      const newTheme = await Theme.create({
        nameTheme,
        image: name,
      });
      res.status(201).json(newTheme);
    } catch (error) {
      console.error(error);
      res.status(500).send('Внутренняя ошибка сервера');
    }
  });

themeRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCount = await Theme.destroy({ where: { id } });

      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Тема не найдена.' });
      }

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { nameTheme, file } = req.body;
    console.log(file);

    try {
      const theme = await Theme.findByPk(id);
      if (theme) {
        await theme.update({ nameTheme, image: file.name });
        res.status(200).json(theme);
      } else {
        res.status(404).json({ error: 'Тема не найдена.' });
      }
    } catch (error) {
      console.error('Ошибка при обновлении темы:', error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

module.exports = themeRouter;
