"use client";

import { useState } from "react";

const useQuery = (initial: any) => {
  const [queries, setQuery] = useState(initial);

  const updateQuery = (newQuery: any) => {
    setQuery({ ...queries, ...newQuery });
  };

  const resetQuery = () => {
    setQuery(initial);
  };

  return { queries, updateQuery, resetQuery };
};

export default useQuery;
