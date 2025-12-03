function Greet() {

  let name = "Animesh ";
  let Thank = () => "Thank you all!";

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold text-gray-800">
        This is About {name}, He is so busy Today!
      </h3>

      <h3 className="text-4xl text-green-600 mt-2">
        {Thank()}
      </h3>
    </div>
  );
}

export default Greet;
