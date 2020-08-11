const Blog = function ({ ...props }) {
    return (
        <>
            <h1>Blog</h1>
            <p>{props.descriptions}</p>
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