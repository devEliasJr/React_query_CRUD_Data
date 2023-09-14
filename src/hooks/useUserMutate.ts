import { useMutation, useQueryClient } from "react-query";
import { createPost } from "./useFetchData";

export function useUserMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return mutate;
}
