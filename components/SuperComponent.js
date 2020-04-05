import React, {Component} from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class SuperComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <BaseLayout>
                <p>Hello, this is blogs page</p>
            </BaseLayout>
        )
    }
}

export default SuperComponent;