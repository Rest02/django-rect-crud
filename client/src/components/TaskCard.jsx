export function TaskCard( {tasks} ) {
  return (
    <div>
      <h1>{tasks.title}</h1>
      <p>{tasks.description}</p>
      <hr />
    </div>
  );
}
