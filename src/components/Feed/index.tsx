import styled from '@emotion/styled';
import React, { useState } from 'react';
import { COLOR } from '../../constants';
import { ItemList } from './ItemList';

export const Feed = () => {
    const [selected, setSelected] = useState("all")
    const SelectCategory = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.id) {
            setSelected(target.id);
        }
    };
    return (
        <>
        <Category onClick={SelectCategory}>
            <Li id="all" selected={selected == "all" ? true : false}>전체</Li>
            <Li id="best" selected={selected == "best" ? true : false}>⭐인기글</Li>
            <Li id="petition" selected={selected == "petition" ? true : false}>대선청원</Li>
            <Li id="free" selected={selected == "free" ? true : false}>자유글</Li>
            <Li id="qna" selected={selected == "qna" ? true : false}>질문/답변</Li>
            <Li id="news" selected={selected == "news" ? true : false}>뉴스</Li>
            <Li id="tip" selected={selected == "tip" ? true : false}>노하우</Li>
        </Category>
        <ItemList />
        </>
    );
};

const Category = styled.ul`
    width: 80vh;
    margin: 20px 0 0 30px;
`;
const Li = styled.li<{selected: Boolean}>`
    margin-right: 4px;
    cursor: pointer;
    display: inline-block;
    padding: 12px 16px;
    background-color: ${(props) => props.selected ? COLOR.main : "none"};
    font-weight: 500;
    color: ${(props) => props.selected ? "#fff" : "#7A7A7A"};
    border-radius: 20px;
    border: ${(props) => props.selected ? "none" : "1px solid " + COLOR.gray};
`;

export default Feed;