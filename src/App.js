import React, { useState } from "react";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardContent
} from "@mui/material";

const cardContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const cardStyle = {
  maxWidth: 400,
  padding: "16px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px"
};

const topStepContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px"
};

const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
  "Step 10"
];

const questions = [
  {
    question: "Question 1",
    options: ["Option A", "Option B", "Option C", "Option D"]
  },
  {
    question: "Question 2",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"]
  },
  {
    question: "Question 3",
    options: ["Yes", "No"]
  },
  {
    question: "Question 4",
    options: ["Choice X", "Choice Y", "Choice Z"]
  },
  {
    question: "Question 5",
    options: ["Red", "Green", "Blue"]
  },
  {
    question: "Question 6",
    options: ["Apple", "Banana", "Orange", "Grapes"]
  },
  {
    question: "Question 7",
    options: ["Option A", "Option B", "Option C"]
  },
  {
    question: "Question 8",
    options: ["Option X", "Option Y"]
  },
  {
    question: "Question 9",
    options: ["Option 5", "Option 6", "Option 7"]
  },
  {
    question: "Question 10",
    options: ["Choice Alpha", "Choice Beta", "Choice Gamma"]
  }
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNext = () => {
    if (activeStep < questions.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleOptionClick = (option, index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const isLastStep = activeStep === questions.length - 1;

  const handleFormSubmit = () => {
    if (!isLastStep) {
      handleNext();
      setSelectedOptions(Array(questions.length).fill(null));
    } else {
      setShowSuccessMessage(true);
    }
  };

  return (
    <Container>
      <div style={topStepContainerStyle}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h6">
              {questions[activeStep].question}
            </Typography>
            <List>
              {questions[activeStep].options.map((option, index) => (
                <ListItem key={option}>
                  <ListItemButton>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "8px",
                        margin: "8px",
                        cursor: "pointer",
                        textAlign: "center",
                        backgroundColor:
                          selectedOptions[activeStep] === option
                            ? "lightgreen"
                            : "white"
                      }}
                      onClick={() => handleOptionClick(option, activeStep)}
                    >
                      {option}
                      {selectedOptions[activeStep] === option && (
                        <span
                          role="img"
                          aria-label="tick"
                          style={{ marginLeft: "5px" }}
                        >
                          ✔️
                        </span>
                      )}
                    </div>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div style={buttonContainerStyle}>
              {activeStep > 0 && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
              {isLastStep ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      {showSuccessMessage && (
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Successfully submitted the form!
        </Typography>
      )}
    </Container>
  );
}

export default App;
