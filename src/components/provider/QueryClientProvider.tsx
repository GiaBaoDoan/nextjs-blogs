"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { queryClient } from "@/lib/queryClient";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: window.localStorage,
    });

    persistQueryClient({
      queryClient,
      persister,
      maxAge: 1000 * 60 * 60 * 24, // 24h
    });

    setIsReady(true); // đảm bảo không render sớm hơn
  }, []);

  if (!isReady) return null; // tránh render khi chưa set persister

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
