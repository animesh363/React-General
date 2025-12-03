import Button from "./Button";
import Greet from "./Greet";
import Random from "./Random";

function App(){
  return <div className="">
    <h1 className="text-4xl">Hello Duniyan!</h1>
    <Greet></Greet>
    <Button></Button>


    <Random></Random>  {/*We can do multiple call to same somponent */}
    <Random></Random>
    <Random></Random>
    <Random></Random>
    
  </div>

}



export default App;