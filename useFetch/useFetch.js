import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [stateInfo, setStateInfo] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setStateInfo({
        ...stateInfo,
        isLoading: true,
      });
      const resp = await fetch(url);
      const data = await resp.json();
      setStateInfo({
        data,
        isLoading: false,
        hasError: null,
      });
    };
    getFetch();
  }, [url]);

  return {
    data: stateInfo.data,
    isLoading: stateInfo.isLoading,
    hasError: stateInfo.hasError,
  };
};
