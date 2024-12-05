'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Levi Murazik',
        email: 'levi@example.com',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lora Mucho',
        email: 'lora@example.com',
        password: await bcrypt.hash('123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Themes', [
      {
        nameTheme: 'Мои карточки',
        image: '/mycards.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      {
        nameTheme: 'Дом',
        image: '/home.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTheme: 'Семья',
        image: '/family.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTheme: 'Путешествия',
        image: '/adventure.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTheme: 'Школа',
        image: '/school.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nameTheme: 'Еда',
        image: '/food.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nameTheme: 'Природа',
        image: '/nature.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTheme: 'Животные',
        image: '/animal.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTheme: 'Транспорт',
        image: '/cars.svg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Cards', [
      // Карточки для темы "Еда"
      {
        engWord: 'Apple',
        rusWord: 'Яблоко',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Bread',
        rusWord: 'Хлеб',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Cheese',
        rusWord: 'Сыр',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Chicken',
        rusWord: 'Курица',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Fish',
        rusWord: 'Рыба',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Дом"
      {
        engWord: 'Table',
        rusWord: 'Стол',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Chair',
        rusWord: 'Стул',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Window',
        rusWord: 'Окно',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Door',
        rusWord: 'Дверь',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Roof',
        rusWord: 'Крыша',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Семья"
      {
        engWord: 'Mother',
        rusWord: 'Мать',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Father',
        rusWord: 'Отец',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Brother',
        rusWord: 'Брат',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Sister',
        rusWord: 'Сестра',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Grandparent',
        rusWord: 'Дедушка/Бабушка',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Путешествия"
      {
        engWord: 'Plane',
        rusWord: 'Самолет',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Train',
        rusWord: 'Поезд',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Hotel',
        rusWord: 'Отель',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Map',
        rusWord: 'Карта',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Suitcase',
        rusWord: 'Чемодан',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Школа"
      {
        engWord: 'Book',
        rusWord: 'Книга',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Pencil',
        rusWord: 'Карандаш',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Teacher',
        rusWord: 'Учитель',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Classroom',
        rusWord: 'Класс',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Homework',
        rusWord: 'Домашнее задание',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Мои карточки"
      {
        engWord: 'Flashcard',
        rusWord: 'Флеш-карта',
        themeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Quiz',
        rusWord: 'Викторина',
        themeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Study',
        rusWord: 'Учеба',
        themeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Test',
        rusWord: 'Тест',
        themeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Review',
        rusWord: 'Обзор',
        themeId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Природа"
      {
        engWord: 'Tree',
        rusWord: 'Дерево',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Flower',
        rusWord: 'Цветок',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'River',
        rusWord: 'Река',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Mountain',
        rusWord: 'Гора',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Sky',
        rusWord: 'Небо',
        themeId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Животные"
      {
        engWord: 'Dog',
        rusWord: 'Собака',
        themeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Cat',
        rusWord: 'Кошка',
        themeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Bird',
        rusWord: 'Птица',
        themeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Fish',
        rusWord: 'Рыба',
        themeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Horse',
        rusWord: 'Лошадь',
        themeId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Карточки для темы "Транспорт"
      {
        engWord: 'Car',
        rusWord: 'Автомобиль',
        themeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Bus',
        rusWord: 'Автобус',
        themeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Bicycle',
        rusWord: 'Велосипед',
        themeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Train',
        rusWord: 'Поезд',
        themeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        engWord: 'Boat',
        rusWord: 'Лодка',
        themeId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Learneds', [
      { 
        userId: 1, 
        themeId: 1, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId: 1, 
        themeId: 2, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId: 1, 
        themeId: 3, 
        createdAt: new Date(), 
        updatedAt: new Date() },
      { 
        userId: 2, 
        themeId: 4, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      { 
        userId: 2, 
        themeId: 5, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
      {
        userId: 2, 
        themeId: 6, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
