function Random(){

    let number = (Math.random() * 100 ) ;

    return <h1 className=" text-4xl bg-red-500" >Random number is: {Math.round(number)} </h1>
}

export default Random;