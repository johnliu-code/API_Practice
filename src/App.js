import { useEffect, useState } from "react";
import Teams from "./components/Teams";
import Games from "./components/Games";
import Players from "./components/Players";

const App = () => {
  //State for getting data
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);
  const [teamId, setTeamId] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  //Connect to API auth info
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5f98c8de6msh0f12a2f8c20b710p1e52b2jsn5865a8cd34f7',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  //Get teams data from API with fetch
  const getTeamsData = async () => {
      await fetch('https://free-nba.p.rapidapi.com/teams?page=0', options)
    .then(response => response.json())
    .then(response => {
      if(response !== null)
      {
        setTeams(response.data);
      }
      
    })
    .catch(err => console.error(err));
  }

  //Get games data from API with fetch
  const getGamesData = async () => {
    await fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', options)
    .then(response => response.json())
    .then(response => {
      if(response !== null)
      {
        setGames(response.data);
      }
    })
    .catch(err => console.error(err));
  }

  //Get players data from API with fetch
  const getPlayersData = async () => {
  fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => {
    if(response !== null)
    {
      setPlayers(response.data);
    }
  })
	.catch(err => console.error(err));
}
  
//Get all of the data when page first load
  useEffect(() =>{
    getTeamsData();
    getGamesData();
    getPlayersData();  
  }, [])

  //Get games and player info of team
  const getInfoOfTeam = (id) => {
    if (id !== ""){
      setTeamId(id);
      setShowInfo(true);
    }
  }

  return (
    <div className="App">
      <h1>NBA Teams List</h1>
      {!showInfo ? (
          <Teams teams={teams} displayInfo={getInfoOfTeam} />
      ) : (
        <>
          <Games id={teamId} games={games} />
          <Players id={teamId} players={players} />
          <a href ="/">Back to Teams</a>
        </>     
      )}
        
    </div>
  );
}

export default App;
