import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// Esto siempre debe de tener
export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
  },
} as ComponentMeta<typeof MyLabel>;

// Estos ComponentStory y ComponentMeta son genericos
const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

// Paginas
export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};

export const Secondary = Template.bind({});

Secondary.args = { size: "normal", color: "secondary" };

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: "normal",
  allCaps: true,
  color: "tertiary",
};

export const CustomColor = Template.bind({});

CustomColor.args = {
  size: "h1",
  fontColor: "#5517ac",
};

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
  size: "h1",
  fontColor: "#eeeeee",
  backgroundColor: "#000000",
};
