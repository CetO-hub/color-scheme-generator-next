import React from "react";

const Form = (props) => {
  return (
    <>
      <form
        onSubmit={props.onSubmit}
        className="font-bold flex justify-center items-center w-full gap-x-5 shadow-lg p-5"
      >
        <input
          type="color"
          className="h-10 w-20"
          value={props.color}
          onChange={props.onChange}
          name="color"
        />
        <select
          value={props.mode}
          onChange={props.onChange}
          name="mode"
          id="mode-choice"
          className="max-w-xs p-2 border-2 border-gray-200 rounded-md"
        >
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome-dark</option>
          <option value="monochrome-light">Monochrome-light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-complement</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>
        <button className="p-2 border-2 border-gray-200 rounded-md">
          Get color scheme
        </button>
      </form>
    </>
  );
};

export default Form;
