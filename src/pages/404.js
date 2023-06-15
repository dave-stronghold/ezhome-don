import Head from 'next/head';
import PropTypes from 'prop-types';
import Error404 from '../components/error-404';
import Breadcrumb from '../components/breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';

function Error404Page({ newsletterItems, footerItems }) {
    return (
        <>
            <Head>
                <title>Error 404 - EZhome</title>
                <meta
                    name="description"
                    content="EZhome - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using - Construction React Next JS Template."
                />
            </Head>
            <Breadcrumb
                subTitle="Not Found"
                title="404"
                desc="Construction of itself, because it is pain some proper style design occur are pleasure"
            />
            <Error404 />
            <Newsletter newsletterItems={newsletterItems} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Error404Page;
