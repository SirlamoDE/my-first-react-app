function Footer(props) {
    // The props.message and props.date will be passed from the parent component
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    // Render the footer with the passed props
    
    return (

        <footer>
            <p>{props.message}</p>
            <p>
                {props.date}
            </p>
        </footer>
    )
    
}

export default Footer;
