import type { Meta, StoryObj } from "@storybook/react-vite";
import RenderWithState from "./RenderWithState.types.tsx";
import DemoFormComponent from "./DemoFormComconent";
import React from "react";
import userEvent from "@testing-library/user-event";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
const meta: Meta<typeof RenderWithState> = {
  title: "Shared/DemoForm",
  component: RenderWithState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onNameChange: { action: "name changed" },
    onAgeChange: { action: "age changed" },
    onAgreementChange: { action: "agreement changed" },
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof RenderWithState>;

export const Default: Story = {
  args: {
    name: "true",
    age: 0,
    isAgreed: false,
  },
};

export const Interactive: Story = {
  render: () => {
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
            <div>Agreed: {isAgreed ? "yes" : "no"}</div>
          </div>
        )}
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputName = canvas.getByLabelText("Name");
    await userEvent.clear(inputName);
    await userEvent.type(inputName, "xxx");

    const inputAge = canvas.getByLabelText("Age");
    await userEvent.clear(inputAge);
    await userEvent.type(inputAge, "111");

    const agreeCheckbox = canvas.getByLabelText("I agree");
    await userEvent.click(agreeCheckbox);

    const submitButton = canvas.getByRole("button", { name: /Submit/i });
    await userEvent.click(submitButton);

    //--результат перевірити
    const result = await canvas.findByTestId("result");
    await expect(result).toHaveTextContent("Name: xxx");
    await expect(result).toHaveTextContent("Age: 111");
    await expect(result).toHaveTextContent("Agreed: yes");
  },
};
