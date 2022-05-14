export interface MemberData {
    categoryPk: number,
    categoryName: string,
    id: number,
    title: string,
    content: string,
    viewCount: number,
    likeCount: number,
    commentCount: number,
    imageUrl: string[],
    writtenAt: string,
    writerNickName: string,
    writerProfileUrl: string,
};

export interface FormData {
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    files: string[],
    setFiles: React.Dispatch<React.SetStateAction<string[]>>,
}  