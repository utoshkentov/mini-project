import Link from "next/link";
import React from "react";
import {Link as NextLink} from '../../routes'

import '../../styles/main.scss';

const Header = (props) => {

    const {title} = props;
    return (
        <React.Fragment>
            <p>{title}</p>
            {props.children}
            <p className="custom-class">I am styles P element</p>
            <p className="custom-class-from-file">I am styles P element from file</p>


            <Link href="/">
                <a style={{'fontSize': '20px'}}>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/portfolios">
                <a>Portfolios</a>
            </Link>
            <Link href="/blogs">
                <a>Blog</a>
            </Link>
            <Link href="/cv">
                <a>CV</a>
            </Link>
            <NextLink route='test' params={{id: '2'}}> Test 2</NextLink>
            <NextLink route='/test/5'> Test 5</NextLink>
            <style jsx>
                {`
                    a {
                        font-size: 20px;
                    }
                    .custom-class{
                        color: red;
                    }
                `}
            </style>
        </React.Fragment>
    )
};

export default Header