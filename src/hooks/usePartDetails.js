import { useEffect, useState } from "react";

const usePartDetails = (partId) => {
  const [parts, setParts] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `https://evening-escarpment-83437.herokuapp.com/part/${partId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setParts(data));
  }, [partId, setParts, reload]);

  return {
    parts,
    setParts,
    reload,
    setReload,
  };
};

export default usePartDetails;
