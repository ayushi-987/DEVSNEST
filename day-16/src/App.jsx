import Chess from './Chess'
import "./app.css";
function App(){
    return(
        <div className="main">
        <div className="Card">
            <div className="image"></div>
            <h1>REACT MEME CARD</h1>
            <h3>Frontend v/s Backend</h3>
        </div>
        <div className="chess">
            <Chess />
        </div>
        </div>
    )
}
export default App;