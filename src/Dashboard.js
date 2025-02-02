
import './App.css';
import Greeting from './components/Greeting';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import Activities from './components/Activities';
import Footer from './components/Footer';

// Functional Component


function Dashboard() {
  //Data for the components
  const userDetails = {
    name: 'Mesh',
    email: 'codedhands@gmail.com',
    username: 'codedhands',
    bio: 'I am a software engineer and a React developer.',
    hobbies: ['coding', 'reading', 'painting'],
    interests: ['JavaScript', 'React', 'Web Development'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    posts: 34,
    followers: 150,
    following: 75,
    date: 'Built on 01/02/2025',
    activities: [
      "Liked a Reacts post and got sold on the idea of learning React",
      "Started with LEARNING functional components from react documentation",
      "Learned about props",
      "Learned about state",
      "Then follow  it up props and state again.",
      "learn about hooks",
      "Then I built my first app, which you are looking at!"],
      
    message: `Thank you for visiting my React's Journey Website.`,
    
    address: {
      street: '10 Broad St',
      city: 'New Lagos',
      state: 'Lagos',
      Nationality: 'Citizen of the World'
    }
  };

  // Render the components
  return (
              
   <>
     <div className="App">
       <h1><Greeting name={userDetails.name}/>  </h1> 
      
      <div className="profile">
        <Profile name={userDetails.name} username={userDetails.username} 
        email={userDetails.email} age ={userDetails.age} bio ={userDetails.bio}/>
      </div>
      <div>
        <Statistics posts={userDetails.posts} followers={userDetails.followers} following={userDetails.following}/>
        <Activities activities={userDetails.activities}/>
      </div>
      <div className="address">
        <h2>Address</h2>
        <p>{userDetails.address.street}</p>
        <p>{userDetails.address.city}, {userDetails.address.state}</p>
        <p>{userDetails.address.Nationality}</p>
      </div>
      <Footer message={userDetails.message} date = {userDetails.date} />
    </div>
   </> 
    
  );

}

export default Dashboard;
