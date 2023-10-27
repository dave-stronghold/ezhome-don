import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.mediumImage}`;
    const linkPath = `/services/${service?.slug}`;

    return (
        <div className="service-item">
            <a className={classes.img}>
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </a>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <a>{service?.title}</a>
                </h2>
                {/* <div className={classes.icon}>
                    <Link href="mailto://info@example.com" passHref>
                        <IoAddSharp />
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
