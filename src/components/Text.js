import styled, { useTheme } from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const title = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.title};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.label};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  title,
  label,
  caption,
  error,
  hint,
};

const TextView = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

export const Text = ({variant, children, style={}}) => {
  const theme = useTheme();

  return <TextView variant={variant} theme={theme} style={style}>{children}</TextView>
}

Text.defaultProps = {
  variant: "body",
};