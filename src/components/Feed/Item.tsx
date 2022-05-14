import styled from "@emotion/styled";
import Link from 'next/link';
import { COLOR } from '../../constants'

import { MemberData } from "../../types/Article"

export const Item = ({
    categoryPk, categoryName, id, title, content, viewCount,
    likeCount, commentCount, imageUrl, writtenAt, writerNickName, writerProfileUrl,
}: MemberData) => {
    const convertLocalDate = (value: string) => {
        const now: Date = new Date();
        const target: Date = new Date(value);
        const timeDiff = (+now -+target)/(1000*60); // 분 단위 시간차
        const [year, month, day, time] = target.toLocaleString().split(".");
    
        if (timeDiff < 1) {
            return "방금 전";
        } else if (timeDiff < 60) {
            return Math.floor(timeDiff)+"분 전";
        } else if (timeDiff < 60 * 24) { 
            return Math.floor(timeDiff/60)+"시간 전";
        } else if (timeDiff < 60 * 24 * 3) {
            return Math.floor(timeDiff/(60*24))+"일 전";
        } else {
            return year+"년 "+month+"월 "+day+"일 "+time;
        }
    };
    const urlReplace = /(http[s]?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/g;

    return (
    <Container>
        <Wrap>
            <Info>
                <Avatar src={writerProfileUrl} />
                <NickName>{writerNickName}</NickName>
                <SubInfo>{categoryName} • {convertLocalDate(writtenAt)}</SubInfo>
            </Info>
            <Article>
                <Title>{title}</Title>
                <Content>{content}</Content>
                { imageUrl ? (
                <ImgWrap text={ typeof(imageUrl) !== "string" ? imageUrl.length-1 : 0 }>
                    <Image src={ typeof(imageUrl) !== "string" ? imageUrl[0] : imageUrl }/>
                </ImgWrap>
                ) : null }
            </Article>
            <CountWrap>
                <Count icon="eye">{viewCount}</Count>
                <Count icon="like-thumb">{likeCount}</Count>
                <Count icon="talk">{commentCount}</Count>
                <Link href={"post/" + id}>글보기</Link>
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
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
`;

const CountWrap = styled.ul`
    a {
        float: right;
        padding: 3px 4px;
        border: 1px solid ${COLOR.main};
        color: ${COLOR.main};
        font-size: 13px;
        border-radius: 4px;
        &:hover {
            font-weight: 700;
        }
    }
`;
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