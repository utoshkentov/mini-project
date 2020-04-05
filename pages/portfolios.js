import React, {Component} from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";

class Portfolios extends Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            posts = response.data;
        } catch (error) {
            console.log(error)
        }

        return {posts: posts.splice(0, 10)}
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
                        <a style={{'fontSize': '20px'}}>{post.title}</a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const {posts} = this.props;
        return (
            <BaseLayout>
                <p>Hello, this is portfolio page</p>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;