import styled from 'styled-components';

export const PatronsWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.bottom};
  padding-top: 15px;
  width: 270px;
  margin: auto auto 15px auto;
  display: grid;
  grid-template-columns: 130px 130px;
  grid-gap: 15px;

  a {
    display: flex;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.bigPhone} {
    width: 570px;
    grid-template-columns: 190px 190px 190px;
  }

  ${({ theme }) => theme.mq.smallPC} {
    display: grid;
    grid-template-columns: 200px;
    position: absolute;
    padding-top: 1150px;
    margin: 0 0 0 20px;
    border-top: none;
  }
`;

export const PatronImage = styled.img`
  width: ${({ isRectangle }) => (isRectangle ? '120px' : '80px')};
  height: 80px;

  ${({ theme }) => theme.mq.bigPhone} {
    width: ${({ isRectangle }) => (isRectangle ? '160px' : '120px')};
    height: 120px;
  }

  ${({ theme }) => theme.mq.smallPC} {
    width: ${({ isRectangle }) => (isRectangle ? '200px' : '120px')};
    height: 120px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bottom};
  }
`;
