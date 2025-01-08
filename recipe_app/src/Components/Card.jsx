import './Component.css'
function Card ({ image, title, description }){
    return (<>
    <div className="card">
        <div className="card-body">
            <img className="image" src={image}/>
            <h5 className="card-title">{title}</h5>
            <h6 lassName="card-discription">{description}</h6> 
        </div>
        
    </div>
    </>)
}
export default Card