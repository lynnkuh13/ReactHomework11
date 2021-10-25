import React, {useState, useEffect} from "react";

/*Do the counter project with hook
In project have two inputs
Add 5 effects 

          -> one runs when your component is mounted 

          -> one runs when your input #1 is changed

          -> one runs when your input #2 is changed

          -> one runs when your counter is changed

           -> one runs when your anything is changed

          -> one runs only when either of the input is changed
*/ 

function Hooks() {
    const [counter, setCount] = useState(0);
    const [firstName, setFirstName] = useState('Dummy value');
    const [lastName, setLastName] = useState('');

    function setCounter() {
        console.log("COUNTED!");
        setCount(counter+1);
    }

    useEffect(() => {
        console.log("rendered");
    }) //renders every time - 
    // one that runs when anything changes

   useEffect(() => {
        console.log("MOUNTED");
    }, []) //only once on didMount

    useEffect(() => {
        console.log("First name updated");
    }, [firstName]) //only on firstName

    useEffect(() => {
        console.log("First name updated");
    }, [lastName]) //only on lastName

    useEffect(() => {
        console.log("First name updated");
    }, [counter]) //only on counter


    useEffect(() => {
        console.log("First name or last name updated");
    }, [ firstName, lastName]) 







    function submit(event) {
        event.preventDefault();
        console.log("First name: ", firstName);
        console.log("Last name: ", lastName);
    }
    return (
        <div>
            <button onClick={setCounter}>CLICK ME</button>
                <h3> {counter} </h3>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button onClick={submit}>Submit</button>
        </div>
    )
}
export default Hooks;
