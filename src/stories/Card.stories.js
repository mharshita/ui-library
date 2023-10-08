import CustomCard from "../lib/CustomCard";

export default {
  title: "Components/Card",
  component: CustomCard,
};

const Template = (args) => <CustomCard {...args} />;

export const Elevated = Template.bind({});
Elevated.args = {
  header: "Card Header",
  content:
    "The content of the card will appear here. The content of the card will appear here. The content of the card will appear here.",
  footer: "The footer of the card will appear here",
  variant: "elevated",
};

export const Flat = Template.bind({});
Flat.args = {
  header: "Card Header",
  content:
    "The content of the card will appear here. The content of the card will appear here. The content of the card will appear here.",
  footer: "The footer of the card will appear here",
  variant: "flat",
};
