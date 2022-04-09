import styled from 'styled-components'
import media from 'styled-media-query'

export const UserNameText = styled.p`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.01em;
    color: #1f2224;
    text-align: center;
    margin-right: 100px;
    margin-left: 16px;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  .logout {
    font-weight: 600;
    //   font-size: 25px;
    font-size: 20px;
    line-height: 29px;
    //    color: #000000;
    color: white;
    margin-right: 50px;
  }

  .avatar {
    color: white;
  }
  ${media.lessThan('medium')`
    margin-right: 15vw;
  `}
`
