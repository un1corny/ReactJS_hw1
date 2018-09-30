import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import PostsList from "./PostsList";
import Elsewhere from "./Elsewhere";


class Blog extends React.Component {

    render() {

        const menuItems = [
            {href: "/", title: "Home"},
            {href: "/features", title: "New features"},
            {href: "/press", title: "Press"},
            {href: "/hires", title: "New hires"},
            {href: "/about", title: "About"}
        ];

        const posts = [
            {
                title: "Sample blog post",
                author: "January 1, 2014 by Mark",
                text: "This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
            },
            {
                title: "Another blog post",
                author: "December 23, 2013 by Jacob",
                text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
            },
            {
                title: "New feature",
                author: "December 14, 2013 by Chris",
                text: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
            }
        ];

        const socialLinks = [
            {href: "/github", title: "GitHub"},
            {href: "/twitter", title: "Twitter"},
            {href: "/facebook", title: "Facebook"}
        ];

        return (
            <div>
                <Menu items={menuItems}/>
                <PostsList title={'The Bootstrap Blog'} items={posts}/>
                <Elsewhere title={'Elsewhere'} items={socialLinks}/>
            </div>
        )
    }
}

ReactDOM.render(<Blog/>, document.getElementById('blog'));