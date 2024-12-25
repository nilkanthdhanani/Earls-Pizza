import { useEffect, useState } from 'react';
import blogMap from '@/components/blogMap';
import styles from './blogPart1.module.scss';
import Image from 'next/image';
import RightChevronIcon from '@/assets/images/svg/rightChevron';
import UserIcon from '@/assets/images/svg/userIcon';
import CalendarIcon from '@/assets/images/svg/calendarIcon';
import ChatIcon from '@/assets/images/svg/chatIcon';
import BlogDetails from '../blogDetails';

export default function BlogPart1() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const blogsPerPage = 3;
    const totalPages = Math.ceil(blogMap.length / blogsPerPage);

    const currentBlogs = blogMap.slice(
        (currentPage - 1) * blogsPerPage,
        currentPage * blogsPerPage
    );

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const getPaginationButtons = () => {
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, startPage + 2);

        const buttons = [];
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    type="button"
                    className={currentPage === i ? styles.activePage : ''}
                    onClick={() => goToPage(i)}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isModalOpen]);

    return (
        <div className={styles.blogMainDiv1}>
            {currentBlogs.map((blog, index) => (
                <div className={styles.blogBox} key={index} onClick={() => openModal(blog)}>
                    <div className={styles.blogBoxImg}>
                        <Image src={blog.image} alt={blog.title} />
                    </div>
                    <div className={styles.blogBoxDetails}>
                        <div className={styles.blogList}>
                            <div className={styles.blogListText}>
                                <UserIcon />
                                <span>{blog.name}</span>
                            </div>
                            <div className={styles.blogListLine}></div>
                            <div className={styles.blogListText}>
                                <CalendarIcon />
                                <span>{blog.date}</span>
                            </div>
                            <div className={`${styles.blogListText} ${styles.spanMargin}`}>
                                <ChatIcon />
                                <span>{blog.comment} Comments</span>
                            </div>
                        </div>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <div className={styles.viewMore}>View More</div>
                    </div>
                </div>
            ))}
            <div className={styles.blogNumber}>
                <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous"
                >
                    <RightChevronIcon />
                </button>
                {getPaginationButtons()}
                <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next"
                >
                    <RightChevronIcon />
                </button>
            </div>
            <BlogDetails
                blog={selectedBlog}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}
