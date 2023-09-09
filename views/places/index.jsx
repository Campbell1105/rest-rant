let placesFormatted = data.places.map((place) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/places/${place.id}`} >
          {place.name}
        </a>
      </h2>
      <p className="text-center">
        {place.cuisines}
      </p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
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

  
  