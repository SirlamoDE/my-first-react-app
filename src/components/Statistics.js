function Statistics(props) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Posts: {props.posts} </li>
        <li>Followers: {props.followers}</li>
        <li>Following: {props.following}</li>
      </ul>
    </div>
  );
}

export default Statistics;
