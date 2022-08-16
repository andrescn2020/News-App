import Head from "next/head"
import Link from "next/link"

export default function PageLayout({ children, title = "News App" }) {
    return (
        <>
            <Head>
                <title>News App</title>
                <meta name='description' content='newsapp - the best app to red news'></meta>
                <link ref="icon" href="favicon.ico"></link>
            </Head>
            <header>
                <div>
                    <Link href="/">News Api</Link>
                </div>
                <div>
                    <Link href="/about">About</Link>
                </div>
            </header>
            <main>
                {children}
            </main>
            <style jsx>{`
                header {
                    padding: 20px
                    display: flex
                    justify-content: space-between
                }
            `}</style>
        </>
    )
}