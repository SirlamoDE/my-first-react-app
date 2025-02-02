function Profile(props) {
   
    return (
      <div>
        <h2>Profile</h2>
        <p> {props.bio}</p>
        <p>Username: {props.username}</p>
        <p>Email: {props.email}</p>
      </div>
    );
  
}



export default Profile;