import { Meta, StoryObj } from "@storybook/react";

// Layouts

// Components
import Template from "./index";

// Constants
import { LORUM_IPSUM } from "../../utils/constants";

const meta: Meta<typeof Template> = {
  title: "Components/Accordion",
  component: Template,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "text",
      type: { name: "string", required: true },
      description: "Array of accordion items - each container a title and content ",
    },
    label: {
      control: "text",
      type: { name: "string", required: true },
      description: "Unique identifier to set item keys",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Template>;

const Accordion = (args: any) => <Template {...args} />;

export const Default: Story = {
  render: (args) => <Accordion {...args} />,
};
Default.args = {
  label: "Lorem ipsum",
  items: [
    {
      name: "According Heading One",
      overview: LORUM_IPSUM,
    },
    {
      name: "According Heading Two",
      overview: LORUM_IPSUM,
    },
  ],
};

export const WithImage: Story = {
  render: (args) => <Accordion {...args} />,
};
WithImage.args = {
  label: "Lorem ipsum",
  hasImage: true,
  items: [
    {
      name: "According Heading One",
      overview: LORUM_IPSUM,
    },
    {
      name: "According Heading Two",
      overview: LORUM_IPSUM,
    },
  ],
};
