import React from 'react'


const SingleNews = ({item}) => (
    <>
        <a href={item.url} target="_blank" className="article_wrapper">
        <div className="col m4">
            <div className="card">
                    <div className="card-image">
                        <img src={item.urlToImage} height="300px"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title red-text text-darken-4">{item.title}</span>
                    <p>{item.content}</p>
                    </div>
                    <div className="card-action">
                        <a href={item.url} target="_blank">Read more</a>
                    </div>
            </div>
        </div>
        </a>
    </>
)

export default SingleNews
