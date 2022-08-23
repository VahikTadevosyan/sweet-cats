import React from "react";
import styled, { css } from "styled-components";
import Loader from "../Loader";
import {PropsWithChildren} from "react";

type IButtonProps = PropsWithChildren & {
    className?: string;
    size?: "small" | "medium" | "big";
    themes?: "primary" | "secondary" | "dark" | "light";
    active?: boolean;
    disable?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
    onSubmit?: () => void;
}

const Button = ({
                    children,
                    className,
                    active,
                    loading,
                    disable,
                    style,
                    onClick,
                    onSubmit
                }: IButtonProps) => (
 <>
     <button
         className={className}
         onClick={onClick}
         onSubmit={onSubmit}
         style={
             active
                 ? { ...style,border: '1px solid' }
                 : loading ? { ...style, pointerEvents: `none` } : disable ?  { ...style,opacity: 0.5 ,pointerEvents: `none` } :
                 style
         }
     >
         {loading ? <Loader/> : children}
     </button>
 </>
);

const sizes = {
    small: css`
    padding: 5px 20px;
    font-size: 12px;
  `,
    medium: css`
    padding: 10px 30px;
    font-size: 14px;
  `,
    big: css`
    padding: 15px 40px;
    font-size: 18px;
  `
};

const ButtonThemes = {
    primary: css`
    border: 1px solid tomato;
    background: tomato;
    color: white;
  `,
    secondary: css`
    border: 1px solid palevioletred;
    background: palevioletred;
    color: white;
  `,
    dark: css`
    border: 1px solid #273444;
    background: #273444;
    color: white;
  `,
    light: css`
    border: 1px solid #eff2f7;
    background: #f9fafc;
    color: #273444;
  `
};

const StyledButton = styled(Button)`
  ${({ size = "small" }) => sizes[size]};
  ${({ themes = "primary" }) => ButtonThemes[themes]};
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 200px;
  
`;

export default StyledButton;