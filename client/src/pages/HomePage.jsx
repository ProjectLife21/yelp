// Components
import { Button } from "../components";

const HomePage = () => {
  const sayHello = () => {
    console.log("HELLO HOME PAGE!");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <Button text="Hello world!" handleClick={sayHello} />
    </div>
  );
};
export default HomePage;
