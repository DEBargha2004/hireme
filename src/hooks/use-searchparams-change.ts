"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSearchParamsChange = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const getParam = (key: string) => {
    return searchParams.get(key);
  };

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    return params;
  };

  const deleteParam = (searchParams: URLSearchParams, key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    return params;
  };

  const replace = (params: URLSearchParams) => {
    router.replace(`${pathname}?${params}`);
  };

  return {
    getParam,
    setParam,
    deleteParam,
    replace,
  };
};
