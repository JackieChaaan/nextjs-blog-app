import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.scss'

import React from 'react'
import Link from 'next/link';

const CardCmp = ({ item }) => {

    const { title, category, featured_image, published_on,published_by, slug } = item;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={featured_image?.file_path} />
            <Card.Body>
                <Card.Subtitle>{category?.name}</Card.Subtitle>
                <Card.Title>
                    <Link href={`/pages/blog/${slug}`}>{title}</Link>
            </Card.Title>
            <Card.Text>
                <span className='user-img'><img src={featured_image?.file_path} alt="user-img" /></span>
                <span className='user'>{published_by || 'user'}</span>
                <span className='pub-date'>{published_on}</span>   
            </Card.Text>
        </Card.Body>
        </Card >
    )
}

export default CardCmp
