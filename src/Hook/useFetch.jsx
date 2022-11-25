import { useEffect, useState } from "react";

function useFetch(url) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((e) => {
        setResult(e);
        setLoading(true);
      });
  }, [url]);
  return { result, loading };
}

export default useFetch;
