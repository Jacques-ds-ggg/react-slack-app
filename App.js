import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './components/Chat'
import { useEffect, useState } from 'react'
import Login from './components/Login'
import Styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import { auth, provider } from './firebase';


function App(props) {

  const [rooms, setRooms] = useState([]);
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('user')));


  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().Name }
      }))
    })
  }
  const signOut = () => {
    auth.signOut().then(()=> {
      localStorage.removeItem('user');
      setUser(null);
    })

  }

  useEffect(() => {
    getChannels();
  }, [])

  // console.log("User in App State", User);

  

  return (
    <div className="App">
      <Router>
        {
          !User ?
          <Login setUser={setUser}/>
        :
        <Container>
          <Header signOut={signOut} user={User}/>
          <Main>
            <Sidebar rooms={rooms} />
            <Switch>
              <Route path="/room/:channelid">
                <Chat User={User}/>
              </Route>
              <Route path="/">
                <SelectChannel>
                  Select A Channel
                </SelectChannel>
              </Route>
            </Switch>
            </Main>  
        </Container>
      }
      </Router>
    </div>
  );
}

export default App;

const SelectChannel = Styled.div`
  background-image: url("https://www.theladders.com/wp-content/uploads/Ladders_SlackPTSD-1000x563.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  padding: 100px;
  font-weight: 900;
  font-size: 50px;
  color: #7b03fc;
  flex-direction: column;
  align-items: center;
`
const Container = Styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0,1fr);
  background: white;
  // background: #C0C0C0;
`;
const Main = Styled.div`
  display: grid;
  grid-template-columns: 260px auto;

`;