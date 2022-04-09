import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal' | 'avaliable'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding-left: 3rem;
    padding-right: 3rem;
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxsmall};
      margin-right: calc(${theme.spacings.xxsmall} / 4);
    }
  `,
  minimal: (theme: DefaultTheme, avaliable: boolean) => css`
    background: none;
    color: ${avaliable ? theme.colors.green: "red"};
    &:hover {
      color: ${darken(0.2, avaliable ? theme.colors.green: "red")};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled, avaliable }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, ${theme.colors.lightPrimary} 0%, ${theme.colors.primary} 50%);
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    &:focus {
      outline: 1px dashed;
    }
    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #9701B0 0%, #9758a6 50%)`};
    }
    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme, avaliable!)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
