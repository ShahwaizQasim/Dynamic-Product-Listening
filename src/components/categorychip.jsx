
function CategoriesBox({children, isChosen, onClick}){
    
    const categories = children;
    return(
        <>
        <div className={`${isChosen ? 'box2': 'box'}`} onClick={onClick}>
            <h3>{categories?.name}</h3>
        </div>
        </>
    )
}

export default CategoriesBox;