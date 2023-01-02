import React from "react";
import { useQuery, gql ,useLazyQuery} from "@apollo/client";

const FILMS_QUERY = gql`
query Missions {
  missions {
    name
    website
    manufacturers
    payloads {
      orbit
      nationality
      manufacturer
    }
  }
}
`;
const SHIP_QUERY = gql`

query Ships {
  ships {
    model
    name
    type
    status
  }
}
`;

const DRAGON_QUERY = gql`
query Dragons {
  dragons {
    name
    first_flight
    diameter {
      feet
    }
    launch_payload_mass {
      lb
    }
  }
}

`


export default function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);
 
  const { data:ShipData, loading:ShipLoading, error:Shiperror } = useQuery(SHIP_QUERY);
  

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
 

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.missions.map((launch) => (
          <li key={launch.id}>{launch.name} {launch.manufacturers} </li>
        ))}
      </ul>
      <ul>
        {ShipData.ships.map((ship) => (
          <li>{ship.name}</li>
        ))}
      </ul>

      
     
     

    </div>
  );
}