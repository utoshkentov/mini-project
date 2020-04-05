import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import axios from 'axios';



class Index extends Component {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            userData = response.data;
        } catch (error) {
            console.log(error)
        }

        return {initialData: [1, 2, 3, 4], userData}
    }

    constructor(props) {
        super(props);
        this.state = {
            title: "I am Index Page"
        };
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    updateTitle = () => {
        this.setState({
            title: "I am updated Index Page title"
        })
    }

    render() {
        const {userData, initialData} = this.props;
        return (
            <BaseLayout>
                <h1>Hello, I am in Index page</h1>
                <h2>{this.state.title}</h2>
                <h2>{userData.title}</h2>
                <button onClick={this.updateTitle}>Change title</button>
            </BaseLayout>
        )
    }
}

export default Index;