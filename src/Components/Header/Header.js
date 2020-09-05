import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Social Buddy</h1>
            <nav>
                <a href="/posts">Posts</a>
                <a href="/friends">Friends</a>
                <a href="/settings">Settings</a>
            </nav>
        </div>
    );
};

export default Header;