import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectFullwidth from '../../components/windows/fullwidth';
import { getAllItems } from '../../lib/items-util';

function ProjectFullwidthPage({
    projects,
    bannerTwoItems,
    newsletterItems,
    footerItems,
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
            <ProjectFullwidth projects={projects} />
            <BannerFive bannerTwoItems={bannerTwoItems} />
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
    const allItems = tempArray.filter((project) => {
        if (project.flag === 'windows') return project;
    });
    return {
        props: {
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
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
