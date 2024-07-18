import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import "./Login.css";
function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
   const[isOpen,setOpen]=useState(false)
   const [user, setUser] = useState(null);
  const cookies = new Cookies();
  const login = () => {
    Axios.post("https://tic-toe-tac-backend.onrender.com/login", {
      username,
      password,
    }).then((res) => {
      const { firstName, username, token, userId } = res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      setIsAuth(true);
    });

    
  };

  const signUp = () => {
    Axios.post("https://tic-toe-tac-backend.onrender.com/signup", user).then((res) => {
      const { token, userId, firstName, username, hashedPassword } =
        res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
    });
  };
  return (<>
    {/* <div className="login">
      <label> Login</label>

      <input
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}> Login</button>
    </div> */}


    <div>


     <div className=  {`${isOpen ? "log-in" : " "} container`}>
   <div className="box"></div>
   <div className="container-forms">
     <div className="container-info">
       <div className="info-item">
         <div className="table">
           <div className="table-cell">
             <p>
              Have an account?
             </p>
             <div className="btn" onClick={() => setOpen(false)}>
               Log in
             </div>
           </div>
         </div>
       </div>
       <div className="info-item">
         <div className="table">
           <div className="table-cell">
             <p>
               Don't have an account? 
             </p>
             <div className="btn" onClick={() => setOpen(true)}>
               Sign up
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="container-form ">
     <form onSubmit={login}>
       <div className="form-item log-in ">
         <div className="table">
           <div className="table-cell">
             {/* <input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" /> */}
             <input  type="text"  id="username" placeholder="username" value={username}  onChange={(event) => setUsername(event.target.value)} />
             <input type="password" id="password"   placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
             <div className="btn" onClick={login}>
               Log in
             </div> 
           </div>
         </div>
       </div>
       </form>
       <div className="form-item sign-up">
         <div className="table">
           <div className="table-cell">
             {/* <input name="email" placeholder="Email" type="text" /><input name="fullName" placeholder="Full Name" type="text" /><input name="Username" placeholder="Username" type="text" /><input name="Password" placeholder="Password" type="Password" /> */}
             <input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
             <input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
             <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
             <div className="btn" onClick={signUp}>
              Sign up
           </div>
           </div>
         </div>
       </div>
     </div>
 </div>
</div>
  </div>  

    
    </>
  );
}

 export default Login;
