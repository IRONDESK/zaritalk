import styled from "@emotion/styled";
import { Children, useState } from "react";
import { COLOR } from "../../constants";
import { MemberData } from "../../types/Article"

export const ArticleDetail = ({
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
                <ImageWrap>
                <Images>
                { imageUrl.map((el) => 
                    (<img src={el} />)
                )}
                </Images>

                </ImageWrap>
            </Article>
            <CountWrap>
                <Count>
                    <img src="/images/icon/like-thumb_white.svg" />{likeCount}
                </Count>
                <Count>
                    <img src="/images/icon/talk_white.svg" />{commentCount}
                </Count>
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
    margin: 5px 0;
    font-size: 14px;
    color: #7a7a7a;
    line-height: 22px;
`;
const ImageWrap = styled.div`
    position: relative;
    margin: 0 -26px;
    `;
const Images = styled.div`
    height: 200px;
    white-space: nowrap;

    transition: .5s all;
    img {
        width: 360px;
        height: 100%;
        object-fit: cover;
    }
`;


const CountWrap = styled.div`
    display: flex;
    margin: 24px 0;
`;
const Count = styled.button`
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 0 6px;
    height: 32px;
    background-color: #f0f0f0;
    font-weight: 500;
    color: #7a7a7a;
    border-radius: 6px;
    img {
        margin-right: 5px;
    }
`;