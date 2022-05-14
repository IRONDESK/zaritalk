import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { COLOR } from '../../constants';

interface PropsType {
    hasData?: boolean,
}

export const PageHeader = ( { hasData }: PropsType ) => {
    const router = useRouter();
    const [location, query] = router.asPath.split("/").splice(2);
    
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
                    { hasData ? (
                    <WriteSubmit type="submit"
                    hasData={hasData}>
                        완료
                    </WriteSubmit>
                    ) : (
                    <WriteSubmit type="button"
                    onClick={() => {alert("제목과 내용은 필수 입력 사항입니다.")}}
                    hasData={hasData}>
                        완료
                    </WriteSubmit>
                    ) }
                    
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
const WriteSubmit = styled.button<{hasData: boolean|undefined}>`
    cursor: ${(props) => props.hasData ? "pointer" : "not-allowed"};
    width: 100%;
    padding: 10px 19px;
    background-color: ${COLOR.main};
    font-size: 14px;
    font-weight: 700;
    color: ${COLOR.white};
    border-radius: 8px;
    opacity: ${(props) => props.hasData ? 1 : 0.3};
`;

export default PageHeader;