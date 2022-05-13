import { useRouter } from "next/router";
import { PageHeader } from "../../../components/Layout/PageHeader";
import { ArticleDetail } from "../../../components/Detail/ArticleDetail"

export default function Detail() {
    const router = useRouter();
    // const [location, query] = router.asPath.split("/").splice(1);

    return (
    <>
        <PageHeader />
        <ArticleDetail 
        categoryPk = {1}
        categoryName = '대선청원'
        pk = {1}
        title = '별을 다하지 애기 듯합니다. 아스라히 지나가는 하늘에는 봅니다.'
        content = '별을 다하지 애기 듯합니다. 아스라히 지나가는 하늘에는. 노새, 소녀들의 속의 봅니다. 계집애들의 언덕 내 덮어 차 버리었습니다. 풀이 계집애들의 우는 하나의 헤일 않은 이 별 가득 있습니다. 별을 새워 남은 까닭입니다. 지나가는 자랑처럼 아이들의 하나에 있습니다. 언덕 라이너 된 까닭입니다. 별 별 같이 나의  우는 계십니다. 무엇인지 별들을 봄이 어머니 있습니다. 밤을 겨울이 책상을 새워 계십니다. 나는 별 시와 쉬이 있습니다. 라이너 별을 덮어 거외다. 때 된 언덕 아스라히 나의 이름과, 지나고 까닭입니다. 가득 이름자 어머님, 마디씩 밤을 아침이 책상을 그리고 있습니다. 흙으로 내 때 이국 이름을 잠, 잔디가 까닭입니다. 이 비둘기, 언덕 이네들은 별 아름다운 별을 위에도 하늘에는 봅니다. 내 라이'
        viewCount = {120}
        likeCount = {10}
        commentCount = {5}
        imageUrl = {['https://static.zaritalk.com/images/img-default-thumbnail@2x.png', 'https://static.zaritalk.com/images/img-default-thumbnail@2x.png']}
        writtenAt = '2022-04-18T17:29:19'
        writerNickName = '칸디천사'
        writerProfileUrl = 'https://static.zaritalk.com/profiles/profile-57-img-fox-39-39%403x.png'
        />
    </>
    );
}