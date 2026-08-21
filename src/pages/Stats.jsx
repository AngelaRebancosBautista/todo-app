function Stats({ todos }) {
  const completed = todos.filter((todo) => todo.done).length;

  const remaining = todos.length - completed;

  return (
    <div className="page">

      <h2>Stats</h2>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Todos</h3>
          <p>{todos.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>

        <div className="stat-card">
          <h3>Remaining</h3>
          <p>{remaining}</p>
        </div>

      </div>

    </div>
  );
}

export default Stats;