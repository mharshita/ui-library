import CustomButton from "../lib/CustomButton.js";

export default {
  title: "Components/Button",
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  text: "Click Here",
  isLoading: false,
  fullWidth: false,
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  text: "Click Here",
  isLoading: false,
  fullWidth: false,
  size: "medium",
};

export const Ghost = Template.bind({});
Ghost.args = {
  color: "ghost",
  text: "Click Here",
  isLoading: false,
  fullWidth: false,
  size: "medium",
};
