import useAxios from "axios-hooks";
import { flattenDeep } from "lodash";
import { useEffect, useState } from "react";

export const useApi = <T extends object>(entity: string) => {
  const [dataPerPage, setDataPerPage] = useState<{
    [page: number]: { [key: string]: T } | undefined;
  }>({});
  const [page] = useState(1);
  const [{ data, loading, error }] = useAxios<{ [key: string]: T }>({
    url: entity,
    params: { page },
    withCredentials: true,
  });

  useEffect(() => {
    setDataPerPage((d) => ({ ...d, [page]: data }));
  }, [page, data]);

  const parsedData = flattenDeep(
    Object.values(dataPerPage).map((item) => item?.[entity])
  ).filter(Boolean);

  return [
    { data: parsedData as T, loading, error, setData: setDataPerPage, page },
  ];
};
