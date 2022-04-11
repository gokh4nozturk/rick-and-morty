import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../layouts/Default.js';
import { getLocations } from '../services';
import Pagination from '../components/Pagination.js';

function Home() {
  const [locations, setLocations] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  async function fetchData(page = 1) {
    try {
      const payload = { page };
      const { locations, pagination } = await getLocations(payload);
      setLocations(locations);
      setPagination(pagination);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  function pageChanger(link) {
    const page = link.split('=').pop();
    fetchData(page);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const template = (
    <DefaultLayout>
      <ul className="w-full min-w-max ">
        <li className="list-header">
          <p className="text-left"> Type </p>
          <p className="text-center"> Dimension </p>
          <p className="text-right">Residents Number</p>
        </li>
        {locations.length ? (
          locations.map((location) => (
            <Link key={location.id} to={`/locations/${location.id}`}>
              <li className="list-link">
                <span className="text-left"> {location.type} </span>
                <span className="text-center"> {location.dimension} </span>
                <span className="text-right">{location.residentsNumber}</span>
              </li>
            </Link>
          ))
        ) : (
          <p>No locations found</p>
        )}
      </ul>
      <Pagination pagination={pagination} pageChanger={pageChanger} />
    </DefaultLayout>
  );

  return <>{loading ? <p>Loading...</p> : template}</>;
}

export default Home;
