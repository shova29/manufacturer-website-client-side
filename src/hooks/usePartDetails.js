import { useEffect, useState } from "react";

const usePartDetails = (partId) => {
  const [parts, setParts] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;

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
