import { Padding } from '@mui/icons-material';
import { colors } from '@mui/material';
import { positions, textAlign } from '@mui/system';
import React, {useState , useEffect} from 'react';




function App() {
  const botao={
    margin:'auto',
    display:'flex',
    color :'white',
    backgroundColor:'blue',
    borderRadius:20,
    width:200,
    height:100,
    marginTop:20,
    fontSize:35

    
  }
  const paragrafo={
    textAlign:'center',
    color:'blue',
    width:305,
    margin:'auto',
    marginTop:20,
    marginBottom:30
  }
 
  const tabu ={
      
    display: 'flex',
    flexDirection:"column",
    textAlign:'center'
}
  const tabuLinha={
    margin:'auto',
    display:'flex',
    flexDirection:'row'
  }
  const casa ={
   
    width:250,
    height:250,
    display: 'flex',
    justifyContent:' center',
    alignItems: 'center',
    flexDirection :'row',
    cursor: 'pointer',
    fontSize: 60,
    border: '1px solid #000'

  }

  const JogoInicial = [['','',''],['','' ,''],['','','']]
  const [jogo,setJogo]=useState([['','',''],['','' ,''],['','','']])
  const[simboloAtual,setSimboloAtual]=useState('X')
  const [jogando,setJogando]=useState(true)

  const tabuleiro=(j) =>{
    return(
    <div style={tabu}>
      <div style={tabuLinha}>
        <div style={casa} data-pos='00' onClick={(e)=>jogar(e)}>{j[0][0]}</div>
        <div style={casa} data-pos='01' onClick={(e)=>jogar(e)}>{j[0][1]}</div>
        <div style={casa} data-pos='02' onClick={(e)=>jogar(e)}>{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
        <div style={casa} data-pos='10' onClick={(e)=>jogar(e)}>{j[1][0]}</div>
        <div style={casa} data-pos='11' onClick={(e)=>jogar(e)}>{j[1][1]}</div>
        <div style={casa} data-pos='12' onClick={(e)=>jogar(e)}>{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
        <div style={casa} data-pos='20' onClick={(e)=>jogar(e)}>{j[2][0]}</div>
        <div style={casa} data-pos='21' onClick={(e)=>jogar(e)}>{j[2][1]}</div>
        <div style={casa} data-pos='22' onClick={(e)=>jogar(e)}>{j[2][2]}</div>
        </div>
    </div>
    )
  }
  const JogarNovamente =()=>{
    if(!jogando){
      return<button style={botao} onClick={()=>reiniciar()}>Jogar Novamente</button>
    }
  }

  const verificaVitoria=() =>{
    //linhas
    let pontos =0
    let vitoria=false
    for(let l=0;l<3;l++){
      pontos =0;
      for(let c=0;c<3;c++){
        if(jogo[l][c]==simboloAtual){
          pontos++
        }
      }
      if(pontos == 3){
        vitoria=true
        break
        

      }
    }
    //Colunas
    for(let c=0;c<3;c++){
      pontos=0
      for(let l=0;l<3;l++){
        if(jogo[l][c]==simboloAtual){
          pontos++
        }
      }
      if(pontos==3){
        vitoria=true
        break 
        
      }
    }
    //diagonais
    pontos = 0
  for (let d=0;d<3;d++){
    if(jogo[d][d]==simboloAtual){
        pontos++
      
    }
  }
  if(pontos>=3){
    vitoria=true
    
  }
  pontos=0
  let l=0
  for(let c=2;c>=0;c--){
    if(jogo[l][c]==simboloAtual){
      pontos++
    }
    l++
  }
  if(pontos>=3){
    vitoria=true

  }
  return vitoria
  }
  const trocarJogador=() =>{
    simboloAtual=="X"?setSimboloAtual('O'):setSimboloAtual('X')
  }
  const retPos=(e)=>{
    const p=e.target.getAttribute('data-pos')
    const pos=[parseInt(p.substring(0,1)),parseInt(p.substring(1,2))]
    return pos
  }
  const verificarEspaçoVazio=(e)=>{
    if(jogo[retPos(e)[0]][retPos(e)[1]]==''){
      return true
    }else{
      return false
    }
  }
  const jogar=(e)=>{
    if(jogando){
      if(verificarEspaçoVazio(e)){
        jogo[retPos(e)[0]][retPos(e)[1]]=simboloAtual
        trocarJogador()
        if(verificaVitoria()){
          trocarJogador()
          alert(  simboloAtual +  ' venceu!')
          setJogando(false)
        }

      }else {
        alert('Não disponível')
      }
    }
  }

  const reiniciar=() =>{
    setJogando(true)
    setJogo(JogoInicial)
    setSimboloAtual('X')
  }
  
  
  return (
    <>
    <div>
      <h1 style={paragrafo}>Quem joga : {simboloAtual}</h1>
    </div>
    <div>
      {tabuleiro(jogo)}
    </div>
    <div>
      {JogarNovamente()}
    </div>
    </>
  );

}


export default App;
