import styled from '@emotion/styled';
import React, { useState } from 'react';
import Link from 'next/link';
import ScrollContainer from "react-indiana-drag-scroll";

import { COLOR } from '../../constants';
import { ItemList } from './ItemList';

export const Feed = () => {
    const [selected, setSelected] = useState("ALL")
    const SelectCategory = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.id) {
            setSelected(target.id);
        }
    };
    return (
        <>
        <Category onClick={SelectCategory}>
            <ScrollContainer vertical={false}>
            <Li id="ALL" selected={selected == "ALL" ? true : false}>전체</Li>
            <Li id="BEST" selected={selected == "BEST" ? true : false}>⭐인기글</Li>
            <Li id="PETITION" selected={selected == "PETITION" ? true : false}>대선청원</Li>
            <Li id="FREE" selected={selected == "FREE" ? true : false}>자유글</Li>
            <Li id="QNA" selected={selected == "QNA" ? true : false}>질문/답변</Li>
            <Li id="NEWS" selected={selected == "NEWS" ? true : false}>뉴스</Li>
            <Li id="TIP" selected={selected == "TIP" ? true : false}>노하우</Li>
            </ScrollContainer>
        </Category>
        <ItemList selected={selected} />
        <WriteBtn>
            <Link href="post/new">글쓰기✍️</Link>
        </WriteBtn>
        </>
    );
};

const Category = styled.ul`
    margin: 20px 0 0 30px;
    white-space: nowrap;
`;
const Li = styled.li<{selected: Boolean}>`
    cursor: pointer;
    display: inline-block;
    margin-right: 4px;
    padding: 12px 16px;
    background-color: ${(props) => props.selected ? COLOR.main : "none"};
    font-weight: 500;
    color: ${(props) => props.selected ? "#fff" : "#7A7A7A"};
    border-radius: 20px;
    border: ${(props) => props.selected ? "none" : "1px solid " + COLOR.gray};
`;

const WriteBtn  = styled.div`
    position: fixed;
    bottom: 30px;
    right: 20px;
    text-align: right;
    a {
        padding: 12px 8px;
        font-size: 16px;
        font-weight: 700;
        background-color: ${COLOR.main};
        color: ${COLOR.white};
        border-radius: 8px;
    }
`;

export default Feed;