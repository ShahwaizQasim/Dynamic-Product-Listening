
function CategoriesBox({children, isChosen}){

    console.log(isChosen);
    
    const categories = children;
    return(
        <>
        <div className={`${isChosen ? 'box2': 'box'}`}>
            <h3>{categories?.name}</h3>
        </div>
        </>
    )
}

export default CategoriesBox;