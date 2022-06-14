import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps } from "../types/ButtonProps";
import { Button as ButtonComponent } from "../../Button";

export default {
  title: "Components/Elements",
  component: ButtonComponent
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = { children: "LABEL", size: "medium" };