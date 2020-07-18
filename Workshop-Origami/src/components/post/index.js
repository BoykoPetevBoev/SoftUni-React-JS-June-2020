import React from 'react';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png';

function Post({ index, description, author }) {
    return (
        <div className={styles.post}>
            <img className={styles.image} src={image} alt="Origami" />
            <p className={styles.description}>{index} - {description}</p>
            <div className={styles.author}>
                <span className={styles['author-details']}>
                    <small>Author:</small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Post