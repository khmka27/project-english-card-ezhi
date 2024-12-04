import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ThemCard from '../ui/ThemCard';

export default function ThemesPage() {
  
    const [themes, setThemes] = useState([]);

    useEffect(() => {
      axios.get('/api/themes').then((res) => setThemes(res.data))
    }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'

    }}>
      {themes.map((card) => (
        <ThemCard key={card.id} card={card}/>
      ))}
    </div>
  );
}