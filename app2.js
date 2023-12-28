// React 3
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`))
}
const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),container);