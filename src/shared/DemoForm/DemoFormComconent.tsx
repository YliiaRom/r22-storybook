import React from "react";
import { DemoFormComponentProps } from "./DemoFormComponent.types";
export const DemoFormComponent: React.FC<DemoFormComponentProps> = ({
  name,
  age,
  isAgreed,
  onNameChange,
  onAgeChange,
  onAgreementChange,
  onSubmit,
}) => {
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit();
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => onAgeChange(Number(e.target.value))}
          />
        </label>
        <label>
          I agree
          <input
            type="checkbox"
            checked={!!isAgreed}
            onChange={(e) => onAgreementChange(e.target.checked)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DemoFormComponent;
