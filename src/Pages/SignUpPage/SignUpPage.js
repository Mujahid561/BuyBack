
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


function Signuppage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
    //   console.log(user);
    //   console.log("user successfully registered");
      if(user){
        await setDoc(doc(db,"users", user.uid),{
          email:user.email,
          firstName:fname,
          lastName:lname
        })
      }
      navigate("/")
      
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handlesignup}>
          <input
            type="text"
            placeholder="first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
            <input
            type="text"
            placeholder="last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>submit</button>
          <Link to="/"> <button>back</button></Link>
        </form>
      </header>
    </div>
  );
}

export default Signuppage;
