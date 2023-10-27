import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectFullwidth from '../../components/windows/fullwidth';
import { getAllItems } from '../../lib/items-util';
import { readImagesFromFolder } from '../../utils/readImages';
import ImageGalleryWithLightbox from '../../components/gallery/ImageGalleryWithLightbox';

function ImageGallery({ imageFiles }) {
    return (
        <div className="image-gallery">
            {imageFiles.map((imageFile, index) => (
                <img
                    key={index}
                    src={`/images/gallery/${imageFile}`}
                    alt={`Image ${index}`}
                />
            ))}
        </div>
    );
}

function ProjectFullwidthPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
    imageFiles,
}) {
    return (
        <>
            <Head>
                <title>Collections</title>
                <meta name="description" content="Projects FullWidth" />
            </Head>
            <Breadcrumb
                subTitle="EZHOME Doors"
                title="Collections"
                desc="Aesthetic and durable door collections"
                classt="page_banner__bgwindows fill"
            />
            <Container>
                {/* <ImageGallery imageFiles={imageFiles} /> */}
                <ImageGalleryWithLightbox imageFiles={imageFiles} />
            </Container>
            {/* <ProjectFullwidth projects={projects} /> */}
            {/* <BannerFive bannerTwoItems={bannerTwoItems} /> */}

            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const tempArray = getAllItems('projects');
    // const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('windows');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');
    const imageFiles = readImagesFromFolder('public/images/gallery');
    const allItems = tempArray.filter((project) => {
        if (project.flag === 'windows') return project;
    });
    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
            imageFiles,
        },
    };
}

ProjectFullwidthPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectFullwidthPage;
