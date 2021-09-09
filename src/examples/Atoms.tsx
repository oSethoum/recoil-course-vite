import React, { useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

const darkModeAtom = atom({
  key: "darkMode",
  default: false,
});

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <input
      checked={darkMode}
      onChange={(event) => {
        setDarkMode(event.currentTarget.checked);
      }}
      type="checkbox"
    ></input>
  );
};

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom);
  const styles = {
    color: darkMode ? "#ffffff" : "#000000",
    backgroundColor: darkMode ? "#000000" : "#ffffff",
  };
  return <button style={styles}>Button</button>;
};
const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Atoms;
