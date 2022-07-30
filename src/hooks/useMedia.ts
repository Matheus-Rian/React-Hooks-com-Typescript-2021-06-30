import { useEffect, useState } from "react";

export function useMedia<T>(queries: string[], values: T[], defaultValue: T) {

  const mediaQueriesList = queries.map(q => window.matchMedia(q));

  function getValue() {
    const index = mediaQueriesList.findIndex(mql => mql.matches);

    return values?.[index] || defaultValue;
  }

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueriesList.forEach(mql => mql.addListener(handler));
    return () => mediaQueriesList.forEach(mql => mql.removeListener(handler));
  });

  return value;
}