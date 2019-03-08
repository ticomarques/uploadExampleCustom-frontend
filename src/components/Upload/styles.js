import styled, { css } from 'styled-components';
import { cssVars } from '../../styles/global';

console.log(cssVars);

const dragActive = css`
    border-color: ${cssVars.secondColor};
`;

const dragReject = css`
    border-color: ${cssVars.thirdColor};
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
  border: 1px dashed ${cssVars.fourthColor};
  border-radius: ${cssVars.borderRadiusDefault};
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
    default: cssVars.fifthColor,
    error: cssVars.thirdColor,
    sucess: cssVars.secondColor
};

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;