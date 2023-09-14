import { Box } from "@mui/material";
import CardsComponents from "../../components/cards";
import { useUserData } from "../../hooks/useUserApiQuery";

export default function HomePage() {
  const {data: users, error, isLoading} = useUserData()
  return (
    <Box>
      <CardsComponents user={users} error={error} loading={isLoading} />
    </Box>
  );
}
