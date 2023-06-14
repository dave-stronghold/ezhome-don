import Head from 'next/head';
import PropTypes from 'prop-types';
import BannerFive from '../../components/banner/index-5';
import Breadcrumb from '../../components/breadcrumb';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectDetail from '../../components/projects/project-detail';
import Footer from '../../components/layout/footer';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ProjectDetailPage({
    project,
    projectsSidebar,
    richTexts,
    projectsOverview,
    bannerTwoItems,
    newsletterItems,
    footerItems,
}) { 
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta
                    name="description"
                    content="OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle={project.subTitle}
                title={project.title}
                desc={project.breadcrumbDesc}
                classt={project.class}
            />
            <ProjectDetail
                project={project}
                projectsSidebar={projectsSidebar}
                
                richTexts={richTexts}
                // projectsOverview={projectsOverview}
            />
            
            {/* <BannerFive bannerTwoItems={bannerTwoItems} /> */}
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const project = getItemData(slug, 'projects');
    // const projectsSidebar = getItemData(slug, 'project-sidebar')
    const tempsidebarArray=getAllItems('project-sidebar')
    // const projectsSidebar = getAllItems('project-sidebar');
    const richTexttemp = getAllItems('rich-text');
    const projectsOverview = getAllItems('project-overview');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');
    const richTexts=richTexttemp.filter(project => {if(project.slug === slug) return project})
    const projectsSidebar=tempsidebarArray.filter(project => {if(project.slug === slug) return project})
    return {
        props: {
            project,
            projectsSidebar,
            richTexts,
            projectsOverview,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const projectFilenames = getItemsFiles('projects');

    const slugs = projectFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ProjectDetailPage.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetailPage;
