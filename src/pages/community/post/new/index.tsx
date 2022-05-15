import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

import PageHeader from "../../../../components/Layout/PageHeader";
import WriteForm from "../../../../components/Write/WriteForm";
import { COLOR } from "../../../../constants";

const categoryType:any = {
    PETITION : ["대선청원", 1],
    FREE: ["자유글", 2],
    QNA: ["질문/답변", 3],
    NEWS: ["뉴스", 4],
    TIP: ["노하우", 5],
}

export default function Write() {
    const [hasData, setHasData] = useState<boolean>(false);
    const [category, setCategory] = useState("PETITION");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState<string[]>([]);
    const router = useRouter();
    const TimeOffset = new Date().getTimezoneOffset() * 60000;
    const now = new Date(Date.now() - TimeOffset);

    useEffect(() => {
        if (title && content) {
            setHasData(true)
        } else {
            setHasData(false)
        };
    }, [title, content])
    
    const onSubmitPost = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/postdb", {
            categorypk: categoryType[category][1],
            categoryName: categoryType[category][0],
            title: title,
            content: content,
            viewCount: 0,
            likeCount: 0,
            commentCount: 0,
            imageUrl: files.length > 0 ? files : null,
            writtenAt: now.toISOString().split(".")[0],
            writerNickName: '글쓴이',
            writerProfileUrl: 'https://static.zaritalk.com/profiles/profile-48-img-man-39-39.png',
        });
        router.push(`/community/post/${res.data.id}`);
    }

    return (
    <>
        <Form
            encType="multipart/form-data"
            onSubmit={onSubmitPost}>
        <PageHeader hasData={hasData} />
        <WriteForm
            category={category}
            setCategory={setCategory}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            files={files}
            setFiles={setFiles}
        />
        </Form> 
    </>
    );
}

const Form = styled.form`
    select, input, textarea {
        padding: 12px 20px;
        font-family: 'Pretendard';
        font-size: 14px;
        border: none;
        border-top: 1px solid #E8E8E8;
        &:focus {
            outline: none;
        }
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    font-weight: 700;
    option {
        font-weight: 700;
    }
`;
const Textarea = styled.textarea`
    width: 100%;
    height: 300px;
    resize: none;
`;
const TitleInput = styled.input`
    width: 100%;
`;

const ImgWrap = styled.section`
    margin: 10px 20px;
`;
const ImgPreviewWrap = styled.div`
    margin: 16px 0;
    max-height: 83px;
    white-space: nowrap;
`;
const ImageContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 16px;
    width: 89px;
    height: 83px;
    overflow: hidden;
    border-radius: 4px;
    img {
        width: 100%;
        height: 83px;
        object-fit: cover;
    }
    button {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 24px;
        height: 24px;
        background-image: url("/images/icon/close.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
`;
const ImgUpload = styled.label`
    cursor: pointer;
    display: inline-block;
    padding: 0 8px;
    height: 36px;
    background-color: #DBE9FF;
    color: ${COLOR.main};
    border-radius: 6px;
    span {
        position: relative;
        padding-left: 23px;
        font-weight: 700;
        line-height: 36px;
        &::before {
            content: '';
            position: absolute;
            display: inline-block;
            margin-left: -24px;
            top: 50%;
            width: 23px;
            height: 20px;
            transform: translateY(-50%);
            background-image: url("/images/icon/picture.svg");
        }
    }
`