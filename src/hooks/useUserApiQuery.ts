import { useQuery } from "react-query";
import { getAllData } from "./useFetchData";


export function useUserData () {
  const query = useQuery<IDataProps[], Error>({
    queryFn: getAllData,
    queryKey: ["users"],
    retry: false,
    refetchInterval: 5 * 60 * 1000 // 5 minutes
  })

  return query 
}