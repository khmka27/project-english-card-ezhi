import React from 'react';

export default function ErrorPage() {
  // Функция для редиректа на главную страницу
  const handleRedirect = () => {
    window.location.href = '/'; // Замените на нужный вам путь
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Ошибка 404: Страница не найдена, но ежи вам помогут</h1>
      <img src="/we.svg" alt="Ежи" style={styles.image} />
      <button onClick={handleRedirect} style={styles.button}>
        Вернуться на главную
      </button>
    </div>
  );
}

// Стили для страницы
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  image: {
    width: '800px', // Или другой размер
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

// Эффект при наведении на кнопку
const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

// Добавьте обработчик для изменения стиля кнопки при наведении, если нужно
