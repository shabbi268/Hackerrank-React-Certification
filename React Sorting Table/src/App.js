import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articlesProp, setArticlesProp] = useState(articles.sort((a, b) => (b.upvotes) - (a.upvotes)))

    const mostUpVoted = () => {
        console.log('mostUpVoted: ', articlesProp.slice().sort((a, b) => (b.upvotes) - (a.upvotes)))
        setArticlesProp(articlesProp.slice().sort((a, b) => (b.upvotes) - (a.upvotes)))
    };

    const mostRecent = () => {
        const filteredArticles = articlesProp.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
        setArticlesProp(filteredArticles)
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => mostUpVoted()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => mostRecent()}>Most Recent</button>
            </div>
            <Articles articles={articlesProp} />
        </div>
    );

}

export default App;
