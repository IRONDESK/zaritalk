import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';

import { PageHeader } from "../../../components/Layout/PageHeader";
import { ArticleDetail } from "../../../components/Detail/ArticleDetail"

export default function Detail() {
    const router = useRouter();
    const [post, setPost] = useState<any>();
    const [location, query] = router.asPath.split("/").splice(2);
    
    useEffect(() => {
        axios.get("http://localhost:8080/postdb?pk=" + query)
        .then(res => {
            setPost(res.data[0]);
        })
    }, [])

    return (
    <>
        <PageHeader />
        <ArticleDetail 
        categoryPk = {post?.categoryPk}
        categoryName = {post?.categoryName}
        pk = {post?.pk}
        title = {post?.title}
        content = {post?.content}
        viewCount = {post?.viewCount}
        likeCount = {post?.likeCount}
        commentCount = {post?.commentCount}
        imageUrl = {post?.imageUrl}
        writtenAt = {post?.writtenAt}
        writerNickName = {post?.writerNickName}
        writerProfileUrl = {post?.writerProfileUrl}
        />
    </>
    );
}