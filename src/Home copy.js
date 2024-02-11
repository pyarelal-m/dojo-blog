import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Pyare');
    const [age, setAge] = useState(1);

    const handleClick = (e) => {
        setName('Amit');
        setAge(30);
        console.log("hello "+name, e);
        
    };

    const handleClickAgain = (name, e) => {
        console.log("hello : "+ name, e);
    };
    return (
        <div className="home">
            <h2>Home</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={(e) => handleClickAgain("Pyare", e)}>click me again</button>
        </div>
    );
}
 
export default Home;