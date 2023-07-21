const Map = () => {
  const mapStyle = {
    width: "100%",
    height: "100%",
    border: "none"
  }
  return (
    <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1823.400191554027!2d58.3666451694897!3d37.932722082346885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snl!4v1689930447605!5m2!1sen!2snl" 
        style={mapStyle} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
};

export default Map;