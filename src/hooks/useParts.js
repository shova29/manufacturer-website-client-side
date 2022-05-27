import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`https://evening-escarpment-83437.herokuapp.com/part`)
      .then((response) => response.json())
      .then((data) => {
        setReload(false);
        setParts(data);
      });
  }, []);
  return { parts, setParts, reload };
};

export default useParts;
