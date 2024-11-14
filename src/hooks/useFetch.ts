"use client";
import { useState, useEffect } from "react";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";

export interface productCategoryParams {
  data: [
    {
      product: {
        _id: string;
        prescription: boolean;
        name: string;
        coverimage: string;
        price: number;
        discount_price: number;
      };
      _id: string;
      category: string;
    },
  ];
}

interface FetchState<productCategoryParams> {
  data: productCategoryParams | null;
  loading: boolean;
  error: string | null;
}

function useFetch<productCategoryParams>(
  fetchFunction: (session: Session) => Promise<productCategoryParams>,
): FetchState<productCategoryParams> {
  const { data: session } = useSession();
  const [data, setData] = useState<productCategoryParams | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responseData = await fetchFunction(session!);
        setData(responseData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, session]);

  return { data, loading, error };
}

export default useFetch;
