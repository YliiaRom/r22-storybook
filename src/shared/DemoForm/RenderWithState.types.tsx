import React from "react";
import DemoFormComponent from "./DemoFormComconent";

const RenderWithState = (args: any) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [isAgreed, setIsAgreed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div>
      <DemoFormComponent
        name={name}
        age={age}
        isAgreed={isAgreed}
        onNameChange={setName}
        onAgeChange={setAge}
        onAgreementChange={setIsAgreed}
        onSubmit={() => setSubmitted(true)}
      />
      {submitted && (
        <div data-testid="result">
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Agreed: {isAgreed}</div>
        </div>
      )}
    </div>
  );
};

export default RenderWithState;
