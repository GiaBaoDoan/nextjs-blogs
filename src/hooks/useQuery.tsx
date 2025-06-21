"use client";

import { useState } from "react";

const useQuery = (initial: any) => {
  const [query, setQuery] = useState(initial);

  const updateQuery = (newQuery: any) => {
    setQuery({ ...query, ...newQuery });
  };

  const resetQuery = () => {
    setQuery(initial);
  };

  return { query, updateQuery, resetQuery };
};

export default useQuery;
