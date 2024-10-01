
function CategoriesBox({children}){
    const {name} = children;
    return(
        <>
        <div className="box">
            <h3>{name}</h3>
        </div>
        </>
    )
}

export default CategoriesBox;