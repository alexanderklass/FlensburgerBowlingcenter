import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const dark = "bg-zinc-800";
  const light = "bg-white";
  const [toggleTheme, setToggleTheme] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  const toggleDarkmode = () => {
    setToggleTheme(!toggleTheme);
  };

  useEffect(() => {
    document.body.className = toggleTheme ? dark : light;
    localStorage.setItem("darkmode", toggleTheme);
    //eslint-disable-next-line
  }, [toggleTheme]);

  return (
    <>
      <Switch sx={{marginRight:1}} checked={toggleTheme} onChange={toggleDarkmode} />
    </>
  );
};

export default DarkMode;
