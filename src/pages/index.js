import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import BannerTwo from '../components/banner/index-2';
import BrandTwo from '../components/brand';
import Counter from '../components/counter';
import Hero from '../components/home-page/hero';
import HomePageServices from '../components/home-page/homepage-services';
import LatestBlog from '../components/home-page/latest-blog';
import LatestDoors from '../components/home-page/latest-doors';
import LatestWindows from '../components/home-page/latest-windows';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import Team from '../components/team';
import Testimonial from '../components/testimonial';
import { getAllItems, getFeaturedItems, getWindows,getDoors } from '../lib/items-util';

function HomePage({ 
    heroItems,
    bannerItems,
    aboutItems,
    projects,windows,doors,
    projectSectionItems,
    brandItems,
    services,
    serviceSectionItems,
    bannerTwoItems,
    teamItems,
    teamSectionItems,
    testimonialItems,
    testimonialSectionItems,
    blogs,
    blogSectionItems,
    newsletterItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Home - EZHOME</title>
                <meta
                    name="description"
                    content="Doors and Glass customisation and installation in CANADA."
                />
            </Head>
            <Hero heroItems={heroItems} />
            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <LatestDoors
                projects={doors}
                projectSectionItems={projectSectionItems}
            />
            {/* <LatestWindows
                projects={windows}
                projectSectionItems={projectSectionItems}
            /> */}
            <BrandTwo brandItems={brandItems} />
            <HomePageServices
                services={services}
                serviceSectionItems={serviceSectionItems}
            />
            <BannerTwo bannerTwoItems={bannerTwoItems} />
            <Counter />
            {/* <Team teamItems={teamItems} teamSectionItems={teamSectionItems} /> */}
            <Team  teamSectionItems={teamSectionItems} />
            <Testimonial
                testimonialItems={testimonialItems}
                testimonialSectionItems={testimonialSectionItems}
            />
            {/* <LatestBlog blogs={blogs} blogSectionItems={blogSectionItems} /> */}
            {/* <Newsletter newsletterItems={newsletterItems} /> */}
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestWindows = getWindows(projects);
    const LatestDoors = getDoors(projects);
    const brandItems = getAllItems('brand');
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const testimonialItems = getAllItems('testimonial');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const blogSectionItems = getAllItems('blog-section');
    const blogs = getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');
    // console.log(projectSectionItems)
    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            windows: LatestWindows,
            doors: LatestDoors,
            brandItems,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            blogSectionItems,
            blogs: LatestBlog,
            newsletterItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object),
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object),
    teamSectionItems: PropTypes.instanceOf(Object),
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogSectionItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
