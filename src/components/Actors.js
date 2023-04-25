import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}</div>;

 const actorInfo=actors.map((actor) => (
  <div key={actor.name}>
    <h2>{actor.name}</h2>
    {actor.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ))}
  </div>
))

  return (
    <div>
      <h1> Actors Page</h1>
      {actorInfo}
    </div>
  );
}

export default Actors;
