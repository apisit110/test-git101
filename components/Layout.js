import Head from "next/head";
import Header from "./Header";

export default function Layout({ ...props }) {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initail-scale=1" />
                <title>{props.title}</title>
            </Head>
            <section className="layout">
                <Header />
                <div className="content">{props.desc}</div>
            </section>

            <footer>
                Copyright 2020.
            </footer>
        </>
    )
}