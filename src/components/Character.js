import { useEffect, useState } from 'react';
import { getCharacter } from '../services';

function Character({ resident }) {
  const id = resident.split('/').pop();
  const [character, setCharacter] = useState({});

  async function fetchData() {
    const character = await getCharacter(id);
    setCharacter(character);
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  const getStatus = () => {
    if (character.status === 'Alive') return 'bg-green-400';
    if (character.status === 'Dead') return 'bg-red-400';
    return 'bg-yellow-400';
  };
  if (character) {
    return (
      <>
        <article className="card">
          <div className="card-image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card-content">
            <h1 className="text-lg font-semibold text-slate-900">
              {character.name}
            </h1>
            <div className="flex items-center gap-1">
              <div className="">
                {character.status} - {character.species}
              </div>
              <span className={getStatus() + ' w-2 h-2 rounded-full ml-1'} />
            </div>
            <dl className="text-xs font-medium flex items-center row-start-2">
              {character.originName}
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
              </dd>
            </dl>
            <div className="">{character.type}</div>
            <div className=""> {character.gender} </div>
          </div>
        </article>
      </>
    );
  }
}

export default Character;
