//if we need to import anything in this normal JS file
//we need to specify node='module' in HMTL work
import React from 'react';
import ReactDOM  from 'react-dom/client';
import logo from './logo.png';
import user from './user.png';
import './index.css';

const heading1 = React.createElement(
  'h1',
  {
    id:'title',
    Key:'unique27'
  },
  "Chapter 01 - Inception"
);
const heading2 = React.createElement(
  'h3',
  { 
    Key:'unique28'
  },
  "Theory -"
);
const Tlist1 = React.createElement('li',{Key:'unique1'},"What is Emmet?");
const Tlist2 = React.createElement('li',{Key:'unique2'},"Difference between a Library and Framework?");
const Tlist3 = React.createElement('li',{Key:'unique3'},"What is CDN? Why do we use it?");
const Tlist4 = React.createElement('li',{Key:'unique4'},"Why is React known as React?");
const Tlist5 = React.createElement('li',{Key:'unique5'},"What is crossorigin in script tag?");
const Tlist6 = React.createElement('li',{Key:'unique6'},"What is diference between React and ReactDOM?");
const Tlist7 = React.createElement('li',{Key:'unique7'},"What is difference between react.development.js and react.production.js files via CDN?");
const Tlist8 = React.createElement('li',{Key:'unique8'},"What is async and defer? - see my Youtube video ;)");

const theory_ul = React.createElement(
  'ul',
  {
    id:'container',
    Key:'unique29'
  },
  [Tlist1,Tlist2,Tlist3,Tlist4,Tlist5,Tlist6,Tlist7,Tlist8]
);
const heading3 = React.createElement(
  'h3',
  { 
    Key:'unique30'
  },
  "Code -"
);
const Clist1 = React.createElement('li',{Key:'unique9'},"Set up all the tools in your laptop");
  const Clist2 = React.createElement('li',{Key:'unique10'},"VS Code");
  const Clist3 = React.createElement('li',{Key:'unique11'},"Chrome");
  const Clist4 = React.createElement('li',{Key:'unique12'},"Extensions of VS Code");
const Clist5 = React.createElement('li',{Key:'unique13'},"Create a new Git repo");
const Clist6 = React.createElement('li',{Key:'unique14'},"Build your first Hello World program using");
  const Clist7 = React.createElement('li',{Key:'unique15'},"Using just HTML");
  const Clist8 = React.createElement('li',{Key:'unique16'},"Using JS to manipulate the DOM");
  const Clist9 = React.createElement('li',{Key:'unique17'},"Using React");
      const Clist10 = React.createElement('li',{Key:'unique18'},"duplicate`1");
      const Clist11 = React.createElement('li',{Key:'unique19'},"duplicate`2");
      const Clist12 = React.createElement('li',{Key:'unique20'},"duplicate`3");
const Clist13 = React.createElement('li',{Key:'unique21'},"Push code to Github (Theory as well as code)");
const Clist14 = React.createElement('li',{Key:'unique22'},"Learn about Arrow Functions before the next class");

const ul2= React.createElement(
  'ul',
  {Key:'unique23'},
  [Clist2,Clist3,Clist4]
);
const ul4= React.createElement(
  'ul',
  {Key:'unique24'},
  [Clist10,Clist11,Clist12]
);
const ul3= React.createElement(
  'ul',
  {Key:'unique25'},
  [Clist7,Clist8,Clist9,ul4]
);
const code_ul = React.createElement(
  'ul',
  {
    id:'container',
    Key:'unique31'
  },
  [Clist1,ul2,Clist5,Clist6,ul3,Clist13,Clist14]
);
const heading4 = React.createElement(
  'h3',
  {
    Key:'unique32'
  },
  "References:"
);
const Clist15 = React.createElement('li',{Key:'unique26'},"https://beta.reactjs.org/apis/react/createElement");
const Clist16 = React.createElement('li',{Key:'unique27'},"https://www.youtube.com/watch?v=IrHmpdORLu8");

const ref_ul = React.createElement(
  'ul',
  {
    id:'container',
    Key:'unique33'
  },
  [Clist15,Clist16]
);

const container = React.createElement(
  'div',
  {
    id:'container',
    Key:'unique34'
  },
  [heading1, heading2,theory_ul,heading3,code_ul,heading4,ref_ul]
);
console.log(heading1);

const head1=(
  <h1 id="container" key="un4">
    ReactElement Heading
  </h1>
);
const Title1 =()=>{
	return <h1 key="un3">This is a title function component which we will access inside HeaderComponent1</h1>;
}
const HeaderComponent1 = () =>{
  return (
    <div>
        {head1}
        <Title1/> 
        {Title1()}
        {[]}
        <h2 key="un1">Functional Componet</h2>
        <h2 key="un2">This is h2 tag</h2>
    </div>
  );
}

//Assignment
const Titlecomponent= () => {
  return (<div className='title'>
    <Title1/> 
    <h1 key="ok2">this is h1</h1>
    <h2 key="ok2">this is h2</h2>
    <h3 key="ok3">this is h3</h3>
  </div>);
}
const HeaderComponent=()=>{
  return(
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='searchBar'>
        <input type="search" name="fgfdh" placeholder='search here' id="" />
      </div>
      <div className='searchBar'>
        <form className="nosubmit">
          <input className="nosubmit" type="search" placeholder="Search..."/>
        </form>
      </div>
      <div className='user'>
        <img src={user} alt="" />
      </div>
    </div>

  );
};

const Containercomponent= () => {
  return(
    <div>
      <HeaderComponent/>
      <Titlecomponent/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root

//async defer
//root.render(container);
//root.render(<HeaderComponent1/>); 
//we can call this way also
// root.render(HeaderComponent1());

//Assignment
root.render(<Containercomponent/>); 
//root.render(<HeaderComponent/>); 


