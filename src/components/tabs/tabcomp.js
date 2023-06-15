import classes from './tabcomp.module.scss';
const GridItem = ({color}) => {
    return <>
    <div className={classes.gridItem}>
        <div style={{backgroundColor: `${color.color}`}} className={classes.colorBox}></div>
        <p className={classes.p}>
            {color.name}
        </p >
    </div>
    </>;
};
function ControlledTabsExample({project}) {
    return (
        <>
            <div className={classes.container}>  
            <h3 style={{display:'block',width:'100%',fontSize:'20px'}}>Available Colors</h3>
            {project.colors.map((item) => (<GridItem key={item.id} color={item}/> ))}     
            </div>
        </>
    );
}
export default ControlledTabsExample;
