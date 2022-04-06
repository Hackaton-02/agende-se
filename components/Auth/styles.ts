import styled, { css } from 'styled-components'

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.logoGray};
    margin: 90px auto 54px auto;
    width: 418px;
    height: 87px;
  `}
`

export const LogoText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    position: absolute;
    margin-top: 22px;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 703px;
    height: 162px;
    background: ${theme.colors.primary};
    border-radius: 20px 20px 0px 0px;
    margin: 54px auto 0 auto;
    padding-top: 16px;
    position: relative;
    padding-left: 29px;

    input {
      width: 482px;
      height: 47px;
      background: ${theme.colors.lightBg};
      border-radius: 10px;
      margin-left: 70px;
      border: none;
      padding-left: 20px;

      &:invalid {
        animation: shake ease-out 0.3s;
      }
    }

    .invalid-feedback {
      text-align: center;
      width: 85% !important;
    }

    @keyframes shake {
      25% {
        transform: translateX(4px);
      }

      50% {
        transform: translateX(-4px);
      }

      75% {
        transform: translateX(4px);
      }
    }

    .form-label {
      margin-left: 70px;
      margin-top: 40px;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      color: ${theme.colors.black};
    }
  `}
`

export const TextContainer = styled.div`
  ${({ theme }) => css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: ${theme.colors.white};
    margin: 0px auto 7px auto;

    p:nth-child(2) {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #d9bbbb;
    }
  `}
`

export const FieldsContainer = styled.div`
  ${({ theme }) => css`
    width: 703px;
    min-height: 370px;
    height: auto;
    background: ${theme.colors.white};
    position: absolute;
    width: 645px;
    border-radius: 25px;
    margin: 30px auto 12px auto;

    p {
      text-align: center;
      cursor: pointer;
      margin-bottom: 10px;
      margin-top: 20px;
    }
    &.paragraph {

      & p {
        display: none;
      }
    }
  `}
`
export const Logo = styled.img.attrs(() => ({
  src: '/logo-auth.svg',
  alt: 'Logo'
}))`
  width: 82px;
  margin-left: 22px;
  margin-right: 40px;
`
