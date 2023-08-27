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
      </main>
    </Def>
  );
}

module.exports = new_form;
