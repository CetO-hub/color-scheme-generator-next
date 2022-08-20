import React from "react";

const Form = (props) => {
  return (
    <>
      <form
        action=""
        className="font-bold flex justify-center items-center w-full gap-x-5 shadow-lg p-5"
      >
        <input type="color" className="h-10 w-20" />
        <select
          name=""
          id="mode-choice"
          className="max-w-xs p-2 border-2 border-gray-200 rounded-md"
        >
          <option name="" onChange={props.handleOnChange} value="monochrome">
            Monochrome
          </option>
          <option
            name=""
            onChange={props.handleOnChange}
            value="monochrome-dark"
          >
            Monochrome-dark
          </option>
          <option
            name=""
            onChange={props.handleOnChange}
            value="monochrome-light"
          >
            Monochrome-light
          </option>
          <option name="" onChange={props.handleOnChange} value="analogic">
            Analogic
          </option>
          <option name="" onChange={props.handleOnChange} value="complement">
            Complement
          </option>
          <option
            name=""
            onChange={props.handleOnChange}
            value="analogic-complement"
          >
            Analogic-complement
          </option>
          <option name="" onChange={props.handleOnChange} value="triad">
            Triad
          </option>
          <option name="" onChange={props.handleOnChange} value="quad">
            Quad
          </option>
        </select>
        <button className="p-2 border-2 border-gray-200 rounded-md">
          Get color scheme
        </button>
      </form>
    </>
  );
};

export default Form;
