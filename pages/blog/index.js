import Layout from "../../components/Layout"

const Blog = function ({ ...props }) {
    return (
        <>
            <Layout title="Blog" desc="Hi This is Blog Page">
                <h1>Blog Page</h1>
                <p>{props.descriptions}</p>
            </Layout>
        </>
    )
}

export default Blog

export async function getStaticProps() {
    // const res = await fetch(`https://.../posts/${params.id}`)   
    // const post = await res.json()

    const res = await import(`../../public/data.json`);

    return {
        props: {
            // descriptions: res.default.descriptions
            descriptions: res.descriptions
        }
    }
}