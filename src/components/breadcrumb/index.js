import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Breadcrumb({ subTitle, title, desc,classt }) {
    return (
        <div className={classt?`${classt} fill `:`page_banner__bg`}>
            <Container>
                <div className="page_content">
                    <span className="page_subtitle">{subTitle}</span>
                    <h1 className="page_title">{title}</h1>
                    <p className="page_desc">{desc}</p>
                </div>
            </Container>
        </div>
    );
}

Breadcrumb.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    classt: PropTypes.string,
};

export default Breadcrumb;
