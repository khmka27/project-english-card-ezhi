const express = require('express');
const learnedRouter = express.Router();
const { Learned } = require('../../db/models');

learnedRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const learnedItems = await Learned.findAll();
      res.json(learnedItems);
    } catch (error) {
      console.error(error);
      res.status(500).send('Внутренняя ошибка сервера');
    }
  })
  .post(async (req, res) => {
    try {
      const { themeId, userId } = req.body;

      if (!themeId || !userId) {
        return res.status(400).send('Все поля обязательны для заполнения.');
      }

      const newLearned = await Learned.create({
        themeId,
        userId,
      });
      res.status(201).json(newLearned);
    } catch (error) {
      console.error(error);
      res.status(500).send('Внутренняя ошибка сервера');
    }
  });

learnedRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCount = await Learned.destroy({ where: { id } });

      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Запись не найдена.' });
      }

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { themeId, userId } = req.body;

    try {
      const learnedItem = await Learned.findByPk(id);
      if (learnedItem) {
        await learnedItem.update({ themeId, userId });
        res.status(200).json(learnedItem);
      } else {
        res.status(404).json({ error: 'Запись не найдена.' });
      }
    } catch (error) {
      console.error('Ошибка при обновлении записи:', error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

module.exports = learnedRouter;
