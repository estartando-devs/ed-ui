import "styled-components";
import { ITheme } from "@estartando-devs/ed-ui-types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
