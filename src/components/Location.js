import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocation } from '../services';
import DefaultLayout from '../layouts/Default.js';
import Character from './Character';

function Location() {
  const [residents, setResidents] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const { residents } = await getLocation(id);
      setResidents(residents);
    }
    fetchData();
  }, [id]);

  return (
    <DefaultLayout>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
        {residents.map((resident) => (
          <Character key={resident} resident={resident} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Location;
