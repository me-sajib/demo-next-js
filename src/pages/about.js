import styles from '@/styles/Home.module.css'

export default function About({ posts }) {
    return (
        <div>
            <h1>All Post</h1>
            {posts.map((post) => (
                <div key={post.id} className={styles.posts}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    }
}