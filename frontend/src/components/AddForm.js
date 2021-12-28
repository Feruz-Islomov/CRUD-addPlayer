import React, { useState } from "react";

const AddForm = (props) => {
  const { addPlayerHandler } = props;
  // const [file, setFile] = useState("");
  const [src, setSrc] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    const form = {
      name: e.target.name.value,
      country: e.target.country.value,
      course: e.target.course.value,
      result: e.target.result.value,
    };

    // console.log(e.target.file.value);
    addPlayerHandler(form);
    props.history.push("/");
  };
  const imgHandler = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSrc(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <h1>
        Add Player <i className="fas fa-user-plus"></i>
      </h1>
      <form onSubmit={onSubmit}>
        <input type="file" name="file" accept="image/*" onChange={imgHandler} />
        <input type="text" name="name" id="name" placeholder="choose name" />
        <input type="text" name="country" id="country" placeholder="Country" />
        <input type="text" name="course" id="course" placeholder="Course" />
        <input type="number" name="result" id="result" placeholder="Result" />
        <input type="submit" value="Submit" />
      </form>
      <img src={src} alt="name" />
    </>
  );
};

export default AddForm;
