const GoogleMap = () => {
    return (
        <div className="container mx-auto my-12">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d428736.0610503198!2d-116.97977100000001!3d32.911373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc07c266ea7041%3A0x53065a5792899cfb!2sSan%20Diego%2C%20CA%2092130!5e0!3m2!1sen!2sus!4v1720617751305!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    )
}
export default GoogleMap
