import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const dark = "bg-zinc-600";
  const light = "bg-white text-black";
  const [theme, setTheme] = useState(light);
  const [toggleTheme, setToggleTheme] = useState(false);

  const toggleDarkmode = () => {
    if (theme === light) {
      setTheme(dark);
      setToggleTheme(true);
    } else {
      setTheme(light);
      setToggleTheme(false);
    }
  };

  useEffect(() => {
    document.body.className = theme;
    //eslint-disable-next-line
  }, [theme]);

  return (
    <label className="text-white">
      <Switch checked={toggleTheme} onChange={toggleDarkmode} />
      Nachtmodus
    </label>
  );
};

export default DarkMode;
