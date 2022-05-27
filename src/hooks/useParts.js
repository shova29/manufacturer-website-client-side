import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/part`)
      .then((response) => response.json())
      .then((data) => {
        setReload(false);
        setParts(data);
      });
  }, []);
  return { parts, setParts, reload };
};

export default useParts;
