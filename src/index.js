import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* Chapter one */
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);

/* Chapter two */
// const element = <h1>Hello, world!</h1>;
// root.render(element);
// const name = 'Dlrow';
// const element = <h1>Hello, {name}!</h1>;
// root.render(element);
const user = {
    firstName: 'Olleh',
    lastName: 'Dlrow',
    avatarUrl: 'https://via.placeholder.com/100x100'
};  
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}  
// const element = (<h1>Hola, {formatName(user)}!</h1>);
// root.render(element)
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
// const element = getGreeting(user);
// root.render(element)
// const element = <a href="https://www.reactjs.org"> link </a>;
// root.render(element)
// const element = <img src={user.avatarUrl}></img>;
// const element = <img src='https://via.placeholder.com/100x100'></img>;
// const element = <img src='https://via.placeholder.com/100x100' />;
// const element = <img src={user.avatarUrl} />;
// root.render(element)
// const element = (
//     <div>
//       <h1>Hello!</h1>
//       <h2>Good to see you here.</h2>
//     </div>
//   );
// root.render(element)

/* Chapter Three */
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello, world</h1>;
// root.render(element);
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000);

/* Chapter Four */
function Welcome(props) {
  return <h1>Hello, {props.lastName}</h1>;
}
// const element = Welcome(user)
// const element = <Welcome lastName='DlRoW' />;
// root.render(element)
// class Welcome extends React.Component {
//   constructor() {
//     super()
//     this.firstName = 'Olleh'
//     this.lastName = 'Dlrow'
//   }
//   render() {
//     return <h1>Hello, {this.firstName} {this.lastName}</h1>;
//   }
// }
// const element = new Welcome()
// root.render(element.render())
// function App() {
//   return (
//     <div>
//       <Welcome lastName="Aras" />
//       <Welcome lastName="Cahal" />
//       <Welcome lastName="Edite" />
//     </div>
//   );
// }
// const element = App()
// root.render(element)

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
// const element = Avatar({
  // user: {
  //   name: 'Olleh Dlrow',
  //   avatarUrl: 'https://via.placeholder.com/100x100'
  // }
// })
// const element = UserInfo({
//   user: {
//     name: 'Olleh Dlrow',
//     avatarUrl: 'https://via.placeholder.com/100x100'
//   }
// })
const element = Comment({
  date: new Date(),
  text: 'Hello React',
  user: {
    name: 'Olleh Dlrow',
    avatarUrl: 'https://via.placeholder.com/100x100'
  }
})
root.render(element)