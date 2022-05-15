import styled from "@emotion/styled";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { FormData } from "../../types/Article";
import { COLOR } from "../../constants";

const WriteForm = ({
    category, setCategory, title, setTitle, content, setContent, files, setFiles
}: FormData) => {
    const onLoadFile = (e: any) => {
        const file = URL.createObjectURL(e.target.files[0]);
        if (files.length < 6) {
            setFiles([...files, file]);
        } else {
            alert("최대 6개까지의 이미지만 첨부할 수 있습니다.")
        }
    }

    const DeleteFile = (index: number) => {
        const newFiles = files.filter((v, i) => i !== index);
        setFiles([...newFiles]);
    }

    return (
    <>
    <Select
        name="category"
        onChange={(e) => {setCategory(e.target.value)}}
        value={category}
    >
        <option value="PETITION">대선청원</option>
        <option value="FREE">자유글</option>
        <option value="QNA">질문/답변</option>
        <option value="NEWS">뉴스</option>
        <option value="TIP">노하우</option>
    </Select>
    <label className="a11y-hidden" htmlFor="title">제목</label>
    <TitleInput
        type="text"
        id="title"
        onChange={(e) => {setTitle(e.target.value)}}
        value={title}
        placeholder="제목을 작성해주세요."
    />
    <label className="a11y-hidden" htmlFor="contents">내용</label>
    <Textarea
        id="contents"
        onChange={(e) => {setContent(e.target.value)}}
        value={content}
        placeholder="내용을 작성해주세요.&#13;&#10;◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!&#13;&#10;◎ 뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.◎ 광고글 금지. 서비스 이용이 제한됩니다."></Textarea>
    <ImgWrap>
        <ImgPreviewWrap>
            <ScrollContainer vertical={false}>
                {files.map((value, index) => 
                    <ImageContainer key={"img" + index}>
                    <img src={value} />
                    <button
                        type="button"
                        onClick={() => DeleteFile(index)}
                    />
                    </ImageContainer>
                )}
            </ScrollContainer>
        </ImgPreviewWrap>
        <ImgUpload htmlFor="img">
            <span>사진({files.length}/6)</span>
        </ImgUpload>
    </ImgWrap>
    <input
        className="a11y-hidden"
        type="file"
        accept="img/*"
        id="img"
        onChange={onLoadFile}
    />
    </>
    );
}

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Pretendard';
    border: none;
    border-top: 1px solid #E8E8E8;
    &:focus {
        outline: none;
    }
    option {
        font-weight: 700;
    }
`;
const Textarea = styled.textarea`
    padding: 12px 20px;
    width: 100%;
    height: 300px;
    font-size: 14px;
    font-family: 'Pretendard';
    resize: none;
    border: none;
    border-top: 1px solid #E8E8E8;
    &:focus {
        outline: none;
    }
`;
const TitleInput = styled.input`
    padding: 12px 20px;
    width: 100%;
    font-family: 'Pretendard';
    font-size: 14px;
    border: none;
    border-top: 1px solid #E8E8E8;
    &:focus {
        outline: none;
    }
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
`;

export default WriteForm;