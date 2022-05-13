import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { COLOR } from '../../constants';

interface PropsType {
    submit?: React.FC,
}

export const PageHeader = ( { submit }: PropsType ) => {
    const router = useRouter();
    const [location, query] = router.asPath.split("/").splice(2);
    console.log(location, query)
    return (
        <Container>
            <Back>
                <Link href="/"><img src='/images/icon/back.svg'/></Link>
                {query == "new" ? null : "글 목록으로"}
            </Back>
            {query == "new" ? (
            <>
                <Center>글쓰기</Center>
                <Right>
                    <WriteSubmit type="submit">완료</WriteSubmit>
                </Right>
            </>
            ) : null}
        </Container>
    );
};

const Container = styled.ul`
    padding: 10px;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
`;

const Back = styled.li`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 14px;
    font-weight: 700;
    color: #B4B4B4;
    img {
        cursor: pointer;
        margin: 0 6px;
    }
`;

const Center = styled.li`
    flex: 3;
    text-align: center;
    font-weight: 700;
`;

const Right = styled.li`
    flex: 1;
    text-align: right;
`;
const WriteSubmit = styled.button`
    width: 100%;
    padding: 10px 19px;
    background-color: ${COLOR.main};
    font-size: 14px;
    font-weight: 700;
    color: ${COLOR.white};
    border-radius: 8px;
`;