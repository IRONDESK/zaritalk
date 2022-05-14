import styled from "@emotion/styled";
import axios from "axios";

import { useState } from "react";
import { COLOR } from "../../constants";
import { MemberData } from "../../types/Article"

export const ArticleDetail = ({
    categoryPk, categoryName, id, title, content, viewCount,
    likeCount, commentCount, imageUrl, writtenAt, writerNickName, writerProfileUrl,
}: MemberData) => {
    const [ImgPosition, setImgPosition] = useState<number>(0);
    const [likeState, setLikeState] = useState(likeCount)
    const convertLocalDate = (value: string) => {
        const now: Date = new Date();
        const target: Date = new Date(value);
        const timeDiff = (+now -+target)/(1000*60); // 분 단위 시간차
    
        if (timeDiff < 1) {
            return "방금 전";
        } else if (timeDiff < 60) {
            return Math.floor(timeDiff)+"분 전";
        } else if (timeDiff < 60 * 24) { 
            return Math.floor(timeDiff/60)+"시간 전";
        } else if (timeDiff < 60 * 24 * 3) {
            return Math.floor(timeDiff/(60*24))+"일 전";
        } else {
            return target.toLocaleString();
        }
    };

    const ImgMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        setImgPosition(Number(target.dataset.order) * -360);
    };

    const LikePlus = async () => {
        const res = await axios.patch("http://localhost:8080/postdb/" + id, {
            likeCount: likeCount + 1
        });
        setLikeState(res.data.likeCount);
    };

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
                {
                imageUrl ? (
                    <ImageWrap>
                    <Images move={ImgPosition}>
                    { typeof(imageUrl) !== "string" ? (
                        imageUrl.map((el) => 
                        (<img src={el} />)
                    )
                    ) : <img src={imageUrl} /> }
                    </Images>
                    <ImagePositon now={(ImgPosition/-360) + 1}>
                    { typeof(imageUrl) !== "string" && imageUrl.length > 1 ?
                        (imageUrl.map((v, i) => (
                            <span
                                onClick={ImgMove}
                                data-order={i}
                            ></span>
                        ))) :
                        null
                    }
                    </ImagePositon>
                    </ImageWrap>
                ) : null
                }
            </Article>
            <CountWrap>
                <Count onClick={LikePlus}>
                    <img src="/images/icon/like-thumb_white.svg" />{likeState ? likeState : likeCount}
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
const Images = styled.div<{move: number}>`
    height: 200px;
    white-space: nowrap;
    transform: ${(props) => 'translateX(' + props.move + 'px)'};
    transition: .5s all;
    img {
        width: 360px;
        height: 100%;
        object-fit: cover;
    }
`;
const ImagePositon = styled.div<{now: number}>`
    position: absolute;
    padding: 3px;
    left: 50%;
    bottom: 13px;
    transform: translateX(-50%);
    span {
        cursor: pointer;
        display: inline-block;
        margin: 0 4px;
        width: 11px;
        height: 11px;
        background-color: #fff;
        border-radius: 100%;
        ${(props) => "&:nth-child(" + props.now + ")"} {
            background-color: ${COLOR.main};
        }
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        box-sizing: border-box;
        transition: .5s all;
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