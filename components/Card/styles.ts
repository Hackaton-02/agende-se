import styled, { css } from 'styled-components'
import media from 'styled-media-query'


export const CardContainer = styled.div`
  ${({ theme }) => css`
 //   background-color: ${theme.colors.lightPrimary};
    background-color: ${theme.colors.primary};
    border-radius: 12px;
    font-family: "Inter";
    width: 360px;
    height: 200px;
    margin-bottom: 35px;
    padding-left: 16px;
    padding-right: 16px;
    ${media.greaterThan('medium')`
    `}
    ${media.lessThan('medium')`
      padding: 0px 15px;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    margin-top: 16px;
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    height: 90px;
    letter-spacing: 0.005em;
    color: ${theme.colors.white};
    margin-top: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 19px;
    display: flex;
    justify-content: space-between;
  `}
`

export const DetailsBtn = styled.button`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px;
    letter-spacing: 0.1px;
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    box-sizing: border-box;
    background-color: ${theme.colors.lightPrimary};
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  `}
`
export const Price = styled.span`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px;
    letter-spacing: 0.1px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border-radius: 8px;
    padding: 5px;
    justify-content: space-between;

    img {
      margin-right: 10px;
    }
  `}
`
