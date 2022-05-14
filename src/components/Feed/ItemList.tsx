import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Item } from './Item';

interface propsType {
    selected: string,
}

const categoryType:any = {
    PETITION : "&categorypk=1",
    FREE: "&categorypk=2",
    QNA: "&categorypk=3",
    NEWS: "&categorypk=4",
    TIP: "&categorypk=5",
    BEST: "&viewCount_gte=100",
    ALL: "",
}

export const ItemList = ({ selected }: propsType) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/postdb?_sort=writtenAt&_order=desc" + categoryType[selected])
        .then(res => {
            setPosts(res.data);
        })
    }, [selected])
    
    return (
        <Container>
            {
            posts.map( (ele: any) => (
            <Item
                key={"item" + ele.id}
                categoryPk = {ele.categoryPk}
                categoryName = {ele.categoryName}
                id = {ele.id}
                title = {ele.title}
                content = {ele.content}
                viewCount = {ele.viewCount}
                likeCount = {ele.likeCount}
                commentCount = {ele.commentCount}
                imageUrl = {ele.imageUrl}
                writtenAt = {ele.writtenAt}
                writerNickName = {ele.writerNickName}
                writerProfileUrl = {ele.writerProfileUrl}
            />
            ))
            }
            
        </Container>
    );
};

const Container = styled.main`
    padding-bottom: 150px;
    height: 100%;
    background-color: #E8E8E8;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;