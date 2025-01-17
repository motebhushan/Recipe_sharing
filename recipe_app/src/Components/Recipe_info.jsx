import './Component.css';

function Recipe_info({ image, title, description, onClose, steps ,ingrediants}) {
    return (
        <div className="recipe-info-overlay">
            <button className="close-btn" onClick={onClose}>
                &times;
            </button>
            <div className="recipe-info-content">
                <img src={image} alt={title} />
                <h5>{title}</h5>
                <p>{description}</p>
                <p>Ingrediants:<br/>{ingrediants}</p>
                <h6>Steps:</h6>
                <ol className="steps-list">
                    {steps.map((step, index) => (
                        <li key={index} className="step-item">
                            {step}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Recipe_info;
