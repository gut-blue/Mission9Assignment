import "./App.css";
import teamsData from "./teams.json";

// Welcome Statement AKA
// HEADER COMPONENT
function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball Teams!</h1>
      <p>
        Hey Ballers! This site contains a list of information about all the
        colleges in NCAA Basketball including their school's name, mascot, and
        location. Enjoy!
      </p>
    </div>
  );
}

// Template for TeamCard Component
function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>School Name: {school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
    </>
  );
}

function TeamList() {
  return (
    // The Spread Operator is 3 dots
    <>
      {teamsData.teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </>
  );
}

// Link to NCAA's website
function EmailUs() {
  return (
    <div>
      <h3>Looking for a team but can't find it?</h3>
      <a href="https://www.ncaa.com/sports/basketball-men/d1">
        Click here for more information
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <EmailUs />
      <TeamList />
    </>
  );
}

export default App;
