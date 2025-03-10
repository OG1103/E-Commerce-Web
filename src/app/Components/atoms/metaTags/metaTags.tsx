import Head from "next/head";


type TMetaTagsProps = {
    title: string;
    description?: string;
}

export default function MetaTags({ title, description }: TMetaTagsProps) {
    return (
        <Head>
            <title>{`${title ? `${title} | Muhra` : 'Muhra | Your Fashion Matters'}`}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}