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
// const element = Comment({
//   date: new Date(),
//   text: 'Hello React',
//   user: {
//     name: 'Olleh Dlrow',
//     avatarUrl: 'https://via.placeholder.com/100x100'
//   }
// })
// root.render(element)

/* Chapter Five */
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }
// function tick() {
//   root.render(<Clock date={new Date()} />);
// }
// setInterval(tick, 1000);
// root.render(<Clock />)
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }
// function tick() {
//   root.render(<Clock date={new Date()} />);
// }
// setInterval(tick, 1000);
// root.render(<Clock />)
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     )
//   }
// }
// root.render(<Clock />)
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()})
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
// root.render(<Clock />)
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}
// root.render(<App />)

/* Chapter six */
// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit.');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// root.render(<Form />)
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
// root.render(<Toggle />)
// class LoggingButton extends React.Component {
//   // This syntax ensures `this` is bound within handleClick.
//   handleClick = () => {
//     console.log('this is:', this);
//   };
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }
// root.render(<LoggingButton />)

/* Chapter seven */
function UserGreeting(props) {
  return <h1>Welcome back.</h1>
}
function GuestGreeting(props) {
  return <h1>Welcome visitor.</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
// root.render(<Greeting isLoggedIn={true} />);
// root.render(<Greeting isLoggedIn={false} />);
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
// root.render(<LoginButton />)
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
// root.render(<LoginControl />)
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// root.render(<Mailbox unreadMessages={messages} />)
// const emptyMessages = [];
// root.render(<Mailbox unreadMessages={emptyMessages} />)
class Mailbox extends React.Component {
  render() {
    // const count = 0;
    const count = 1;
    return (
      <div>
        {count && <h1>Messages: {count}</h1>}
      </div>
    )
  }
}
// root.render(<Mailbox />)
class IsLoggedInBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      
      <div>
      <Greeting isLoggedIn={isLoggedIn} />
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. <br />
      {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
      </div>
      // <div>
      // </div>
    );
  }
}
// root.render(<IsLoggedInBtn />)
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
// root.render(<Page />)

/* Chapter eight */
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
const listItems = numbers.map((number) => <li>{number}</li>)
// root.render(<ul>{listItems}</ul>)
function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) => <li>{number}</li>)
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>)


  return (
    <ul>{listItems}</ul>
  )
}
// root.render(<NumberList numbers={numbers} />)