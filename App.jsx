import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Box,
} from "@mui/material";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleReset = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      resume: "",
      url: "",
      about: "",
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Form in React with MUI
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name*"
          name="firstname"
          value={values.firstname}
          onChange={handleChanges}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Last Name*"
          name="lastname"
          value={values.lastname}
          onChange={handleChanges}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email*"
          name="email"
          value={values.email}
          onChange={handleChanges}
          margin="normal"
          type="email"
          required
        />
        <TextField
          fullWidth
          label="Contact"
          name="contact"
          value={values.contact}
          onChange={handleChanges}
          margin="normal"
        />
        <FormControl margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={values.gender}
            onChange={handleChanges}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel
              value="transgender"
              control={<Radio />}
              label="Transgender"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel>Subject</FormLabel>
          <Select
            name="subject"
            value={values.subject}
            onChange={handleChanges}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select a Subject
            </MenuItem>
            <MenuItem value="math">Math</MenuItem>
            <MenuItem value="physics">Physics</MenuItem>
            <MenuItem value="english">English</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="file"
          label="Resume"
          InputLabelProps={{ shrink: true }}
          name="resume"
          onChange={handleChanges}
          margin="normal"
        />
        <TextField
          fullWidth
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChanges}
          margin="normal"
        />
        <Box marginY={2}>
          <TextareaAutosize
            minRows={4}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            name="about"
            value={values.about}
            onChange={handleChanges}
            placeholder="Enter description"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default App;
