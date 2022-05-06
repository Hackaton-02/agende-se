import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  max-width: 420px;
  filter: drop-shadow(0px 3px 4.65px rgba(0, 0, 0, 0.29));
  border-radius: 8px;
  background-color: white;
  padding: 15px 35px;
  margin-bottom: 1.5rem;

  .dates {
    margin-top: 15px;
  }

   h5.dates {
    margin-left: 15px;
  }

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
    width: 300px;
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

export const RejectButton = styled.button`
  font-family: 'Abhaya Libre';
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  margin-top: 2.2rem;
  margin-left: 2rem;
  border: none;
  display: flex;
  align-items: center;
`

export const AcceptedButton = styled.button`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
    border: none;

    p {
      background: ${theme.colors.lightPrimary};
      border-radius: 0.2rem;
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      width: 105px;
      padding: 0.8rem 1.5rem;
      color: ${theme.colors.white};
    }
  `}
`
