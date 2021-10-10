import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { IButton } from "@estartando-devs/ed-ui-types";
import { Button as ButtonComponent }from ".";

export default {
  title: "Components/Elements",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IButton> = (args) => <ButtonComponent {...args} />;

// Reuse that template for creating different stories
export const Button = Template.bind({});
Button.args = { children: "Button element", size: "medium" };