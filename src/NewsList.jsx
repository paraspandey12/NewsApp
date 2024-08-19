
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
    if (!news.length) {
        return <p>No news available</p>;
    }

    return (
        <div>
            {news.map(newsItem => (
                <NewsItem key={newsItem.id} news={newsItem} />
            ))}
        </div>
    );
};

export default NewsList;
