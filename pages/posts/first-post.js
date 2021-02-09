import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
            <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <Image
                src="/images/profileme.png" // Route of the image file
                height={300} // Desired size with correct aspect ratio
                width={225} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            </Layout>
        </>
    )
}