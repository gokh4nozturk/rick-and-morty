import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/Default.js';
import { getLocations } from '../services';

function Home() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const locations = await getLocations();
      setLocations(locations);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const template = (
    <DefaultLayout>
      <ul className="w-full min-w-max ">
        {locations.map((location) => (
          <Link key={location.id} to={`/locations/${location.id}`}>
            <li className="list-link">
              <span className="text-left"> {location.type} </span>
              <span className="text-center"> {location.dimension} </span>
              <span className="text-right">{location.residentsNumber}</span>
            </li>
          </Link>
        ))}
      </ul>
    </DefaultLayout>
  );

  return <>{loading ? <p>Loading...</p> : template}</>;
}

export default Home;
