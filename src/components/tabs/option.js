import classes from './option.module.scss';

function GridItem({ option }) {
    return (
        <div className={classes.gridItem}>
            <img className={classes.colorBox} src={option.link} />
            <p className={classes.p}>{option.name}</p>
        </div>
    );
}
function ControlledTabsExample({ project }) {
    return (
        <>
            <div className={classes.container}>
                <h3
                    style={{
                        display: 'block',
                        width: '100%',
                        fontSize: '20px',
                    }}
                >
                    Available Models
                </h3>
                {project.options.map((item) => (
                    <GridItem key={item.id} option={item} />
                ))}
            </div>
            {project.options2 && (
                <div className={classes.container}>
                    {project.options2?.map((item) => (
                        <GridItem key={item.id} option={item} />
                    ))}
                </div>
            )}
        </>
    );
}
export default ControlledTabsExample;
