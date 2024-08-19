import React from 'react';

const NewsItem = ({ news }) => {
    if (!news) {
        return <div>No data available</div>;
    }

    
    const {
        title = 'No title available',
        summary = 'No summary available',
        url = '#',
        image = 'https://via.placeholder.com/300x200' 
    } = news;

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{summary}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
