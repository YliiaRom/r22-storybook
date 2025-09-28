import type { Meta, StoryObj } from "@storybook/react";
import { DemoControlsComponent } from "./DemoControlsComponent.types";
import type { DemoControlsComponentProps } from "./DemoControlsComponent.types";

const meta: Meta<DemoControlsComponentProps> = {
  title: "Demo/DemoControlsComponents",
  component: DemoControlsComponent,
  argTypes: {
    text: { control: "text" },
    isActive: { control: "boolean" },
    count: { control: "number" },
    rangeValue: { control: { type: "range", min: 0, max: 100, step: 10 } },
    color: { control: "color" },
    date: { control: "date" },
    data: { control: "object" },
    items: { control: "object" },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger"],
    },
    tags: {
      control: "check",
      options: ["news", "events", "alerts"],
    },
  },
  args: {
    text: "Demo Title",
    isActive: true,
    count: 10,
    rangeValue: 50,
    color: "#1976d2",
    date: new Date(),
    data: { foo: "bar", num: 123 },
    items: ["Item 1", "Item 2", "Item 3"],
    variant: "primary",
    tags: ["news"],
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<DemoControlsComponentProps>;

export const Playground: Story = {
  args: {
    // Все пропсы берутся из meta.args
  },
};

export const SecondaryVariant: Story = {
  args: {
    text: "Secondary Variant",
    isActive: false,
    count: 5,
    rangeValue: 20,
    color: "#e91e63",
    date: new Date("2024-01-01"),
    data: { hello: "world" },
    items: ["A", "B"],
    variant: "secondary",
    tags: ["events", "alerts"],
  },
};
