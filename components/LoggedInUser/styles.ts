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

  img,
  svg {
    cursor: pointer;
    animation: loader 1.2s linear forwards;
  }

  .logout {
    font-weight: 600;
    //   font-size: 25px;
    font-size: 20px;
    line-height: 29px;
    //    color: #000000;
    font-size: 20px;
    line-height: 29px;
    color: white;
    margin-right: 50px;
    animation: opacity 1s linear forwards;
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px 10px;
  }

  .avatar {
    color: white;
  }
  
  ${media.lessThan('medium')`
    margin-right: 15vw;
  `}


  @keyframes opacity {
    0% {
      opacity: 0;
      display: none;
    }

    50% {
      display: none;

    }

    85% {
      display: flex;
      opacity: 0.2;
    }

    100% {
      opacity: 1;
      display: flex;

    }
  }

  @keyframes loader {
    0% {
      rotate: 0deg;
      opacity: 0;
    }
    25% {
      rotate: z 190deg;
      transform: translateX(-70px);
      opacity: 0.05;
    }

    75% {
      rotate: z 270deg;
      opacity: 0.2;
    }
    100% {
      rotate: 360deg;
      transform: translateX(0px);
      opacity: 1;

    }
  }

  @supports not (rotate: 0deg) {
    @keyframes loader {
      0% {
        transform: rotate(0deg);
        opacity: 0;

      }
      25% {
        transform: translateX(-70px) rotateZ(190deg);
        opacity: 0.05;
      }

      75% {
        transform: rotateZ(270deg);
        opacity: 0.2;

      }
      100% {
        transform: translateX(0px) rotate(360deg);
        opacity: 1;

      }
    }
  }
`
