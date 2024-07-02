import styled from "styled-components";

interface SvgContainerProps {
  height?: string;
  width?: string;
  color?: string;
  onClick?: () => void;
  verticalAlign?: string;
}

const SvgContainer = styled.span.attrs<SvgContainerProps>((props) => ({
  onClick: props.onClick,
}))<SvgContainerProps>`
  svg {
    vertical-align: ${({ verticalAlign = "middle" }) => verticalAlign};
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    color: ${({ color }) => color};
    fill: ${({ color }) => color};
  }
`;

export default SvgContainer;
