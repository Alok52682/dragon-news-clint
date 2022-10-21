import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const categoryNews = useLoaderData();
    return (
        <div className='p-4 shadow'>
            category : {categoryNews.length}
            <div>
                {
                    categoryNews.map(news => <NewsSummaryCard key={news._id} news={news} />)
                }
            </div>
        </div>
    );
};

export default Category;