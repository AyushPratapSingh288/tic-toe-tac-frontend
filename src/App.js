import "./App.css";
import Login from "./components/Login";  
// import SignUp from "./components/SignUp";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { useState } from "react";
import JoinGame from "./components/JoinGame";

function App() {
  const api_key = "np46b29cpcrn";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }
  return (
    <div className="App">
      {isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <button  className="logbtn"onClick={logOut}> Log Out</button>
        </Chat>
      ) : (
        <> 
        <div className="cont">
           <div className="center"><div className="tital"><h1>Tic-Tac-Toe</h1>  </div></div>
           <div className="log">
           {/* <SignUp setIsAuth={setIsAuth} /> */}
           <Login setIsAuth={setIsAuth} />
           </div>
           </div>
           <div className="svg">
      
    </div>
        </>
     )}
   </div>
  );
}

export default App;

//{/* <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-tic-tac-toe" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>851</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#434343"> <path d="M12.492,9.019 C10.577,9.019 9.023,10.572 9.023,12.489 C9.023,14.405 10.577,15.958 12.492,15.958 C14.409,15.958 15.962,14.405 15.962,12.489 C15.962,10.571 14.409,9.019 12.492,9.019 L12.492,9.019 Z M12.533,15.117 C11.081,15.117 9.904,13.949 9.904,12.508 C9.904,11.068 11.081,9.899 12.533,9.899 C13.986,9.899 15.165,11.068 15.165,12.508 C15.165,13.949 13.986,15.117 12.533,15.117 L12.533,15.117 Z" class="si-glyph-fill"> </path> <path d="M3.512,0.079 C1.62,0.079 0.086,1.614 0.086,3.506 C0.086,5.4 1.62,6.934 3.512,6.934 C5.405,6.934 6.94,5.4 6.94,3.506 C6.939,1.614 5.404,0.079 3.512,0.079 L3.512,0.079 Z M3.512,6.095 C2.084,6.095 0.925,4.935 0.925,3.506 C0.925,2.079 2.084,0.919 3.512,0.919 C4.94,0.919 6.101,2.079 6.101,3.506 C6.101,4.935 4.939,6.095 3.512,6.095 L3.512,6.095 Z" class="si-glyph-fill"> </path> <path d="M7.006,9.97 L6.1,9.063 L3.54,11.624 L0.979,9.063 L0.072,9.97 L2.633,12.531 L0.072,15.09 L0.979,15.996 L3.54,13.438 L6.1,15.996 L7.006,15.09 L4.446,12.531 L7.006,9.97 Z" class="si-glyph-fill"> </path> <path d="M16.057,0.926 L15.145,0.013 L12.568,2.59 L9.992,0.013 L9.081,0.926 L11.657,3.502 L9.081,6.076 L9.992,6.988 L12.568,4.413 L15.145,6.988 L16.057,6.076 L13.481,3.502 L16.057,0.926 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg> */}
