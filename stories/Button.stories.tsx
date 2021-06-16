import React from "react";
import { Meta, Story } from "@storybook/react";
import { rcc } from "../src";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  yellow: boolean;
}

const Button: React.FC<Props> = rcc<Props>("button")`red-text ${({ blue }) =>
  blue ? "blue-text-important" : ""} dashed-border ${({ yellow }) =>
  yellow ? "yellow-background" : ""}`;

const ShortcutButton = rcc.button<{ yellow: boolean }>`red-text ${({ blue }) =>
  blue ? "blue-text-important" : ""} dashed-border ${({ yellow }) =>
  yellow ? "yellow-background" : ""}`;

const Input = rcc.input<{}>`dashed-border`;

const Div = rcc.div<{}>`margin`;

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = () => (
  <div>
    {/*
    <Button type="button">Button</Button>
    <Button2 type="button">Button 2</Button2>
      */}
    <Button type="button" yellow>
      Button
    </Button>
    <Div>
      <ShortcutButton type="button" yellow>
        ShortcutButton
      </ShortcutButton>
    </Div>
    <Input placeholder="An input" />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
