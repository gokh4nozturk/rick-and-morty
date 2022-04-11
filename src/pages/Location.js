import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocation } from '../services';
import DefaultLayout from '../layouts/Default.js';
import Character from '../components/Character';

function Location() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  async function fetchData() {
    try {
      const { residents } = await getLocation(id);
      setResidents(residents);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const template = (
    <DefaultLayout>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
        {residents.map((resident) => (
          <Character key={resident} resident={resident} />
        ))}
      </div>
    </DefaultLayout>
  );

  return <>{loading ? <p>Loading...</p> : template}</>;
}

export default Location;
