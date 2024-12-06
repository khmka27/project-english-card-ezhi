import { useEffect, useState } from 'react';
import axios from 'axios';
import ThemCard from '../ui/ThemCard';

export default function ThemesPage() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    axios.get('/api/themes').then((res) => setThemes(res.data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        overflowX: 'auto',
        maxWidth: '1150px',
        margin: '0 auto',
      }}
    >
      {themes.map((card) => (
        <div
          key={card.id}
          style={{
            margin: '10px',
          }}
          key={card.id}
        >
          <ThemCard card={card} />
        </div>
      ))}
    </div>
  );
}
