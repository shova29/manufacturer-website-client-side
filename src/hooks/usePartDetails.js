import { useEffect, useState } from "react";
import useParts from "./useParts";

const usePartDetails = (partId) => {
  const [parts, setParts] = useParts({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/part/${partId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setParts(data));
  }, [partId, reload]);

  return {
    parts,
    reload,
    setReload,
  };
};

export default usePartDetails;
