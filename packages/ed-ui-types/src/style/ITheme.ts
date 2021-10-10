import {
  IColor,
  IText,
  ITypography,
  IMargin,
  IZindex,
  IAction,
  IShape,
  IGrey,
} from './interfaces';

export interface ITheme {
  shadows: string[];
  palette: {
    type: string;
    primary: IColor;
    secondary?: IColor;
    design?: IColor;
    text: IText;
    background: {
      paper: string;
      default: string;
    };
    action?: IAction;
    grey: IGrey;
    error: IColor;
    warning?: IColor;
    info?: IColor;
    success?: IColor;
  };
  margin?: IMargin;
  typography: ITypography;
  zIndex?: IZindex;
  shape?: IShape;
}