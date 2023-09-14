import { Box, Button, FormControl, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserApi from "../hooks/useUserApi";


export default function FormComponent(/*{CreateNewUser}: IFormProps*/) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();


  const { CreateNewUser } = useUserApi();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      id: Math.random(),
      name,
      url,
      description: "Description",
    };

    await CreateNewUser(userData);

    setName("");
    setUrl("");
    navigate("/");
  };

  return (
    <Box maxWidth={500} m={"0 auto"} py={6}>
      <Paper>
        <Box
          component={"form"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          p={4}
          justifyContent={"center"}
          alignItems={"center"}
          onSubmit={handleSubmit}
        >
          <FormControl variant="outlined" fullWidth>
            <TextField
              id="name"
              label="name"
              name="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <TextField
              id="url"
              label="url"
              name="url"
              required
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ fontWeight: "bold" }}
          >
            Enviar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
