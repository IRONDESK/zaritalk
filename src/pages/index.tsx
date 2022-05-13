import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router= useRouter();
    router.push('/community/list');

    return (
    <>
    <p>Redirect...</p>
    </>
    )
}

export default Home
