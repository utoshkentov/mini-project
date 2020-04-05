import React, {Component} from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import {withRouter} from "next/router";

class Test extends Component {

    static async getInitialProps({query}) {
        const testId = query.id;

        return {testId}
    }

    render() {
        const {testId} = this.props;
        return (
            <BaseLayout>
                <h2>I am Test Page with the Id of {testId}</h2>
            </BaseLayout>
        )
    }
}

export default withRouter(Test);