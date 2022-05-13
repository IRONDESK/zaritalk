import styled from '@emotion/styled';
import Feed from '../../../components/Feed';

function List () {
  return (
    <>
      <Title>커뮤니티</Title>
      <Feed />
    </>
  )
}

const Title = styled.h1`
  margin: 34px 0 0 30px;
  font-size: 22px;
  font-weight: 700;
`;


export default List
