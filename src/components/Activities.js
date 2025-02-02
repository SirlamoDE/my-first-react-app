function Activities(props) {
    return (
      <div>
        <h2>Recent Activities</h2>
        <ul>
          {props.activities.map(
            (activity, index) => (
            <li key={index}>{activity}</li>)
            )
           }
        </ul>
      </div>
    );
  }
export default Activities;  