import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch(`https://manufacturer-website-server-side-shova29.vercel.app/part`)
      .then((response) => response.json())
      .then((data) => {
        setReload(false);
        setParts(data);
      });
  }, []);
  return { parts, setParts, reload };
};

export default useParts;
