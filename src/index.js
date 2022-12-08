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
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
// root.render(<NumberList2 numbers={numbers}/>)
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
// root.render(<Blog posts={posts}/>)
function NumberList3(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
// root.render(<NumberList3 numbers={numbers}/>)

/* Chapter nine */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// root.render(<NameForm />)
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about olleh dlrow.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// root.render(<EssayForm />)
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// root.render(<FlavorForm />)
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
// root.render(<FileInput />);
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 5
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
// root.render(<Reservation />)
// root.render(<input value="hi" />);
// setTimeout(function() {
//   root.render(<input value={null} />);
// }, 3000);

/* Chapter ten */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
// root.render(<Calculator />)
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
class Calculator2 extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale='c'/>
        <TemperatureInput scale='f'/>
      </div>
    );
  }
}
// root.render(<Calculator2 />)
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
console.log(tryConvert('5', toFahrenheit))
console.log(tryConvert('5', toCelsius))
console.log(tryConvert('dlrow', toCelsius))
class TemperatureInput2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}
class Calculator3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 'c',
      temperature: ''
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput2 scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput2 scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
// root.render(<Calculator3 />)

/* Chapter eleven */
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
// root.render(<WelcomeDialog />)
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App2() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
// root.render(<App2 />)
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog2() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
// root.render(<WelcomeDialog2 />)
function Dialog2(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog2 title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog2>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
// root.render(<SignUpDialog />)

/* Chapter twelve */
const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({filterText: filterText})
  }

  handleInStockChange(inStockOnly) {
    this.setState({inStockOnly: inStockOnly})
  }

  render() {
    return (
      <div className='FilterableProductTable'>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    )
  }
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form className='SearchBar'>
        <input 
        type='text' placeholder='Item name' value={this.props.filterText} onChange={this.handleFilterTextChange}/>
        <p>
          <input type='checkbox' checked={this.props.inStockOnly} onChange={this.handleInStockChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}
class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    this.props.products.forEach((element) => {
      // These two conditionals must be before the push() method or else ProductCategoryRow will keep appending categories
      if (element.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !element.stocked) {
        return;
      }
      if (element.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={element.category} key={element.category} />)
      }
      rows.push(<ProductRow product={element} key={element.name}/>)
      lastCategory = element.category;
    })

    return (
      <table className='ProductTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
class ProductCategoryRow extends React.Component {
  render () {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>
          {category}
        </th>
      </tr>
    )
  }
}
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span className='outOfStock'>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
  }
}
root.render(<FilterableProductTable products={products}/>)