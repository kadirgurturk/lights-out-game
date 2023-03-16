import { useEffect, useLayoutEffect, useState } from 'react';
import Winpopup from './component/Winpopup';
import './style/app.css';

function App() {

  const [cells,setCells] = useState([
    {id:0, flag:false},
    {id:1, flag:false},
    {id:2, flag:false},
    {id:3, flag:false},
    {id:4, flag:false},
    {id:5, flag:false},
    {id:6, flag:false},
    {id:7, flag:false},
    {id:8, flag:false},
    {id:9, flag:false},
    {id:10,flag:false},
    {id:11,flag:false},
    {id:12,flag:false},
    {id:13,flag:false},
    {id:14,flag:false},
    {id:15,flag:false},
    {id:16,flag:false},
    {id:17,flag:false},
    {id:18,flag:false},
    {id:19,flag:false},
    {id:20,flag:false},
    {id:21,flag:false},
    {id:22,flag:false},
    {id:23,flag:false},
    {id:24,flag:false},
  ])

  const [win,isWin] = useState(false);
  const [move,setMove] = useState(0);

  useEffect(()=>{
      const count = Math.floor(Math.random() * 4 + 1);     

      for(var i = 0; i < count ; ++i){

        var val = Math.floor(Math.random() * 24);


        setCells(cells.map(cell => {if(cell.id === val){cell.flag = true} return cell}))
      }
  },[])

  useEffect(()=>{
    if(cells.every(cell => (cell.flag === true))){isWin(true)}

  },[cells])


  const handleClick = (cell) =>{

    let newMove = move + 1;
    setMove(newMove);

    const newCells = [...cells];

    const id = cell.id

  if (newCells[id + 1]) {
    let count = id;

    while(count > 5){
      count = count -5;
    }
    
    if(count !== 4) newCells[id + 1].flag = !newCells[id + 1].flag;
    
  }

  if (newCells[id - 1]) {
    let count = id;

    while(count >= 5){
      count = count -5;
    }
    
    console.log(count);

    if(count !== 0) newCells[id - 1].flag = !newCells[id - 1].flag;
  }

  if (newCells[id + 5]) {
    newCells[id + 5].flag = !newCells[id + 5].flag;
  }

  if (newCells[id - 5]) {
    newCells[id - 5].flag = !newCells[id - 5].flag;
  }
    newCells[id].flag = !newCells[id].flag;

    setCells(newCells);    
  }
  
  console.log(win);

  return (
    <div className='era'>
      <h2>Lights Out</h2>
      <div className="game-era">
          {cells.map(cell => <div key={cell.id} onClick ={()=>{handleClick(cell)}} className="cell" style={{backgroundColor: cell.flag ? "rgb(0, 106, 255)" : "rgb(134, 184, 254)"}}></div>)}
      </div>
      
      {win && <Winpopup count={move}/>}
    </div>
  );
}

export default App;
