function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}>
        </div>
      )
    })
    return (
        <def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormated}
            </main>
        </def>
    )
    // ...
  }
  
  