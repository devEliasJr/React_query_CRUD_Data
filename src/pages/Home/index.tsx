import { Box } from "@mui/material";
import CardsComponents from "../../components/cards";
import { useGetAllUsersQuery } from "../../hooks/useUserApiQuery";

export default function HomePage() {
  const {data: users, error, isLoading} = useGetAllUsersQuery()
  return (
    <Box>
      <CardsComponents user={users} error={error} loading={isLoading} />
    </Box>
  );
}
