import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";

import { PageHeader } from "../../components/Layout/PageHeader";
import { COLOR } from "../../constants";

export default function Write() {
    return (
    <>
        <PageHeader />
        <Form>
            <Select name="category">
                <option value="petition">대선청원</option>
                <option value="free">자유글</option>
                <option value="qna">질문/답변</option>
                <option value="news">뉴스</option>
                <option value="tip">노하우</option>
            </Select>
            <label className="a11y-hidden" htmlFor="title">제목</label>
            <TitleInput type="text" id="title" placeholder="제목을 작성해주세요."/>
            <label className="a11y-hidden" htmlFor="contents">내용</label>
            <Textarea id="contents" placeholder="내용을 작성해주세요."></Textarea>
            <ImgWrap>
                <ScrollContainer vertical={false}>

                </ScrollContainer>
                <ImgUpload htmlFor="img">
                    <img src="/images/icon/picture.svg" /> 사진()
                </ImgUpload>
            </ImgWrap>
            <input className="a11y-hidden" type="file" id="img" />
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
`;
const TitleInput = styled.input`
    width: 100%;
`;

const ImgWrap = styled.div`
    margin: 10px 20px;
`;
const ImgUpload = styled.label`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86px;
    height: 36px;
    background-color: #DBE9FF;
    font-weight: 700;
    color: ${COLOR.main};
    border-radius: 6px;
    img {
        margin-right: 3px;
    }
`