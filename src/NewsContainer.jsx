// src/NewsContainer.js
import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import SearchBar from './SearchBar';

const NewsContainer = () => {
    const [topNews, setTopNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const url = 'https://api.worldnewsapi.com/top-news?source-country=us&language=en';
            const apiKey = 'a68873976540473da0dcd458e33d3255';

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-api-key': apiKey,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); 

                const allNews = data.top_news.flatMap(item => item.news);
                setTopNews(allNews);
                setFilteredNews(allNews); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = topNews.filter(newsItem => {
            const title = newsItem.title ? newsItem.title.toLowerCase() : '';
            const summary = newsItem.summary ? newsItem.summary.toLowerCase() : '';
            return title.includes(lowercasedQuery) || summary.includes(lowercasedQuery);
        });
        setFilteredNews(filtered);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <NewsList news={filteredNews} />
        </div>
    );
};

export default NewsContainer;
