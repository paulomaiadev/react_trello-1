import './App.css'
import Cep from './components/cep';


function App() {

  function execPromise(){
     return new Promise((resolve, reject) => {
      setTimeout(() => {
          const operacaoDeuCerto = true;
      
          if (operacaoDeuCerto) {
              resolve('A operação foi concluída com sucesso!'); // -> fulfiled
          } else{
              reject('Algo deu errado'); // -> rejected   
          }
      }, 2000);
    });


  } 

  function handleClick() {
  execPromise()
    .then((mensagem) => {
      console.log('Sucesso:', mensagem)
    })
    .catch((erro) => {
      console.error('Erro:', erro)
    })
}



  return (
    <div className="page-shell">
      <button onClick={handleClick}>Executar Promise</button>
      <Cep/>
    </div>


  )
}

export default App
