function Greeting(props){
    const message = `I'm ${props.name}! This is my first react mini-project.`;
    const msg = "Hello, React World!";
    return (
        <header>
            <h1>{msg}</h1>
            <h2>{message}</h2>
            
        </header>
    );  

}

export default Greeting;