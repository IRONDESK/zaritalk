import Head from 'next/head';

export const HTMLHead = () => {
    return (
    <Head>
        <title>자리톡 Zaritalk</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <meta property="og:title" content="자리톡" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="자리톡" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="./images/ogimage.jpg" />
    </Head>
    );
};

export default HTMLHead;