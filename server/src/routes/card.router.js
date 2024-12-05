const express = require('express');
const cardRouter = express.Router();
const { Card } = require('../../db/models');

cardRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const cards = await Card.findAll();
      res.json(cards);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  })
  .post(async (req, res) => {
    try {
      const { engWord, rusWord, themeId } = req.body;

      if (!engWord || !rusWord || !themeId) {
        return res.status(400).send('All fields are required.');
      }

      const newCard = await Card.create({
        engWord,
        rusWord,
        themeId,
      });
      res.status(201).json(newCard);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

cardRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCount = await Card.destroy({ where: { id } });

      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Card not found.' });
      }

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { engWord, rusWord, themeId } = req.body; // = updatedData

    try {
      const card = await Card.findByPk(id);
      if (card) {
        await card.update({ engWord, rusWord, themeId });
        res.status(200).json(card);
      } else {
        res.status(404).json({ error: 'Card not found.' });
      }
    } catch (error) {
      console.error('Error updating card:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = cardRouter;
