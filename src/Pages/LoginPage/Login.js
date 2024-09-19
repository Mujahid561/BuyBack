
import {useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase/firebase";
// import { getDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();


const handleAddData=()=>{
  // fetch('https://dummyjson.com/products/add', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     title: 'BMW Pencil',
  //     /* other product data */
  //   })
  // })
  // .then(res => res.json())
  // .then(console.log("data added sucess fully"));
}
  const fetchData = () => {
    // try {
      
    //   auth.onAuthStateChanged(async (user) => {
       
    //     if (user !== null) {
    //       const docref = doc(db, "users", user?.uid);
    //       const getUser = await getDoc(docref);
         
    //       if (getUser.exists()) {
            
    //         setAdmin(getUser.data())

           
    //         navigate("/home" ,{ state: {userInfo:getUser.data() }})
            
            
    //       }
          
    //     }
    //   });
    // } catch (err) {
    // console.log(err.message);
    // }
  };
  


const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   fetchData();
      
    // } catch (err) {
    //   console.log(err.message)
    // }
  };
  return (
    <div className="App">
      <header className="App-header">
       
        <form onSubmit={handleLogin}>
          <input className="p-2 m-2 border border-solid border-black rounded-lg"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
          className="p-2 m-2 border border-solid border-black rounded-lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-2 m-2 bg-black text-white">submit</button>
        </form>
        
       <Link to="/signup" className="p-2 m-2 bg-black text-white"><button>sign up</button></Link> 
       {/* <ToastContainer/> */}
       <button onClick={handleAddData}>Add data</button>
      </header>
    </div>
  );
}

export default Login;
