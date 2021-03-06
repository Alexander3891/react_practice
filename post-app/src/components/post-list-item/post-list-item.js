import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World!
            </span>
            <div className="d-flex justify-content-crnter align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fas fa-star"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="far fa-heart"></i>
            </div>
</li>
        )
};

export default PostListItem;