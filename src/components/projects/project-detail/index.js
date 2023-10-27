import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import classes from './index.module.scss';
import classes2 from './about.module.scss';
import ProjectSidebar from '../project-sidebar';
import classes3 from './banner-3.module.scss';
import ProjectContent from './project-content';

function ProjectDetail({
    project,
    richTexts,
    projectsOverview,
    projectsSidebar,
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ProjectContent
                        project={project}
                        richTexts={richTexts}
                        projectsOverview={projectsOverview}
                    />
                    <ProjectSidebar projectsSidebar={projectsSidebar} />
                </Row>
                <Row>
                    <Col lg={{ span: 7 }}>
                        {project?.listItem && (
                            <h3 className={classes.summery_title}>Features</h3>
                        )}
                        <ul className={classes2.list__item}>
                            {project?.listItem?.map((item) => (
                                <li className={classes2.list} key={item.id}>
                                    <span className={classes2.list__icon}>
                                        <FaCheck />
                                    </span>
                                    <div className={classes2.list__text}>
                                        <span>{item.listText}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {project.linkText && (
                            <Link
                                href={project.linkText}
                                className={classes3.link}
                            >
                                SEE BROUCHURE
                            </Link>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

ProjectDetail.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    projectsOverview: PropTypes.instanceOf(Object),
    projectsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetail;
