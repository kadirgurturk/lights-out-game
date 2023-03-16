

const Winpopup = ({count}) =>{
    return(
        <div className="win-popup">
            <div className="inner-card">
                <h4> TEBRİKLER!! KAZANDINIZ</h4>
                <p>Toplam Hamle Sayısı : {count}</p>
            </div>
        </div>
    )
}


export default Winpopup;