import React from "react";

const ColorField = (props) => {
  const isColorFields = props.setColor.map((item) => {
    return (
      <>
        <div
          style={{ backgroundColor: `${item.color}` }}
          className="h-screen max-h-[550px]"
        ></div>
      </>
    );
  });

  const isHexCode = props.setColor.map((item) => {
    return (
      <>
        <h1 className="font-bold text-center mt-2">{item.color}</h1>
      </>
    );
  });

  return (
    <>
      <div className="grid grid-cols-5 w-full mt-5 gap-x-3">
        {isColorFields}
        {isHexCode}
      </div>
    </>
  );
};

export default ColorField;
