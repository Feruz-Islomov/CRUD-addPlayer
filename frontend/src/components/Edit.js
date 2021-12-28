import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, country, course, result } = props.location.state.player;
    this.state = {
      //initial value
      id,
      name,
      country,
      course,
      result,
    };
    // console.log(props);
  }
  state = {
    name: "",
    country: "",
    course: "",
    result: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.editPlayerHandler(this.state);
    this.setState({ name: "", country: "", course: "", result: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <>
          <h1>
            Edit Player <i className="fas fa-user-edit"></i>
          </h1>
          <form onSubmit={this.onSubmit}>
            {/* <input type="file" name="file" accept="image/*" onChange={imgHandler} /> */}
            <input
              type="text"
              name="name"
              placeholder="choose name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={this.state.country}
              onChange={(e) => this.setState({ country: e.target.value })}
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={this.state.course}
              onChange={(e) => this.setState({ course: e.target.value })}
            />
            <input
              type="number"
              name="result"
              placeholder="Result"
              value={this.state.result}
              onChange={(e) => this.setState({ result: e.target.value })}
            />
            <input type="submit" value="Submit" />
          </form>
        </>
      </div>
    );
  }
}
export default Edit;
