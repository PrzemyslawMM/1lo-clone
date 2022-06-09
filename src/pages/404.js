import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;
`;
// eslint-disable-next-line react/function-component-definition
const Page404 = () => {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Wróć do strony głównej</Link>
    </Wrapper>
  );
};
export default Page404;
