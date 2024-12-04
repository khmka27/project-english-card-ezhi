import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/esm/Row';
import axiosInstance from '../api/axiosInstance';
import AdsCard from '../ui/AdsCard';
import { useParams } from 'react-router-dom';

export default function AdPage({ user }) {
  const [ads, setAds] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axiosInstance.get('/ads');
        if (id) {
          setAds(res.data.filter((item) => item.categoryId === Number(id)));
        } else {
          setAds(res.data);
        }
      } catch (error) {
        console.error('Ошибка при загрузке объявлений:', error);
      }
    };

    fetchAds();
  }, [id]);

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/ads/${id}`);

      if (res.status === 200) {
        setAds((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log(error);
      alert('Что-то пошло не так');
    }
  };
  const updateHandler = async (id) => {
    try {
      const res = await axiosInstance.put(`/ads/${id}`);
    } catch (error) {
      console.log(error);
      alert('Что-то пошло не так');
    }

    return (
      <Row className="mt-3">
        {ads.length > 0 ? (
          ads.map((card) => (
            <AdsCard
              key={card.id}
              card={card}
              user={user}
              deleteHandler={deleteHandler}
              updateHandler={updateHandler}
            />
          ))
        ) : (
          <p>Нет объявлений для отображения.</p>
        )}
      </Row>
    );
  };
}
