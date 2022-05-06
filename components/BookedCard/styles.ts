import Books from 'dtos/Books'
import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  max-width: 420px;
  filter: drop-shadow(0px 3px 4.65px rgba(0, 0, 0, 0.29));
  border-radius: 8px;
  background-color: white;
  padding: 15px 20px;
  margin-bottom: 1.5rem;

  .text {
    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin: 1rem 0.5rem;
    /* or 21px */

    /* Text/text.900 */

    color: #171717;
  }

  i {
    max-width: 8%;
    align-items: center;
    font-size: 24px;
    justify-content: center;
  }
  .main-title {
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 420px;
  }
  h2 {
    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 125%;
    /* identical to box height, or 25px */
    max-width: 65%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px; /* Text/text.900 */

    color: #171717;
  }
`

export const StatusTextWrapper = styled.div`
  font-family: 'Abhaya Libre';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 150%;
  color: #000000;
  margin-top: 1.5rem;
  margin-left: 3rem;
`

type Status = Pick<Books, "accepted">


export const StatusDisplay = styled.div<Status>`
${({ theme, accepted }) => css`
  margin-top: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;

  p {
    background: ${accepted === "pending" && "#fdba74" || accepted === "agreed" && "#86EFAC" || "red"};
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    width: 85px;
    padding: 0.4rem;
    color: ${accepted === "agreed" && "#14532D" || accepted === "rejected" && "#fff" || "black"} ;
  }
  `}
`
