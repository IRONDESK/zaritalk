import styled from "@emotion/styled";
import { MemberData } from "../../types/Article"

export const Item = ({
    categoryPk, categoryName, pk, title, content, viewCount,
    likeCount, commentCount, imageUrl, writtenAt, writerNickName, writerProfileUrl,
}: MemberData) => {
    return (
    <Container>
        <Wrap>
            <Info>
                <Avatar src={writerProfileUrl} />
                <NickName>{writerNickName}</NickName>
                <SubInfo>{categoryName} • {writtenAt}</SubInfo>
            </Info>
            <Article>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <ImgWrap text={imageUrl.length-1}><Image src={imageUrl[0]}/></ImgWrap>
            </Article>
            <CountWrap>
                <Count icon="eye">{viewCount}</Count>
                <Count icon="like-thumb">{likeCount}</Count>
                <Count icon="talk">{commentCount}</Count>
            </CountWrap>
        </Wrap>
    </Container>
    );
};

const Container = styled.article`
    margin-bottom: 8px;
    padding: 26px 0;
    background-color: #fff;
`;
const Wrap = styled.article`
    margin: 0 26px;
`;

const Info = styled.div`
    vertical-align: middle;
`;
const Avatar = styled.img`
    float: left;
    margin-right: 5px;
    padding: 3px;
    width: 32px;
    height: 32px;
    background-color: #FFD784;
    border-radius: 100%;
`;
const NickName = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    `;
const SubInfo = styled.p`
    font-size: 12px;
    color: #B4B4B4;
    line-height: 16px;
`;

const Article = styled.div`
    margin-top: 18px;
`;
const Title = styled.h3`
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
`;
const Content = styled.p`
    display: -webkit-box;
    margin: 5px 0;
    font-size: 14px;
    color: #7a7a7a;
    line-height: 22px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
const ImgWrap = styled.div<{text: number}>`
    margin: 15px 0;
    position: relative;
    &::after {
        content: ${(props) => props.text ? "'+" + props.text + "'" : ""};
        position: absolute;
        padding: 1px 4px;
        bottom: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        color: #fff;
        line-height: 21px;
        text-align: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
const Image = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
`;

const CountWrap = styled.ul``;
const Count = styled.li<{icon: string}>`
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding-left: 18px;
    font-size: 12px;
    font-weight: 500;
    color: #7a7a7a;
    &::before {
        content: '';
        position: absolute;
        margin-left: -18px;
        width: 15px;
        height: 14px;
        background-image: ${(props) => "url('/images/icon/"+ props.icon + ".svg')"};
        background-position-y: bottom;
    }
`;