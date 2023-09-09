const React = require("react");
const Def = require("../default.jsx");

function new_form(data) {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form method="POST" action={`/places/$(data.place.id)?_method=PUT`}>
          <div className="form-group">
            <label htmlFor="name">Place Name</label>
            <input className="form-group" id="name" name="name" value={data.place.name} />
          </div>
          <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input className="form-group" id="pic" name="pic" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input className="form-group" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input className="form-group" id="state" name="state" />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input className="form-group" id="cuisines" name="cuisines" />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
        <form method="POST" action={`seeders\seed-comments$(data.seeder.id)?_method=PUT`}>
        <div className="form-group">
            <label htmlFor="author">Author</label>
            <input className="form-group" id="author" name="author" value={data.seeder.name} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input className="form-group" id="comment" name="content"  />
            <div className="form-group">
            <label htmlFor="star-rating">Star Rating</label>
            <input className="form-group" id="star-rating" name="start-rating" />
            <div className="form-group">
            <label htmlFor="Rant">Rant</label>
            <input className="form-group" id="Rant" name="Rant" />
          </div>
          </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
