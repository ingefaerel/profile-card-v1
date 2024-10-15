import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
    for each web dev skill that you have,
    customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./linkdn.png" alt="Elmira Mustafina" />;
}

function Intro() {
  return (
    <div>
      <h1>Elmira Mustafina</h1>
      <p>
        A junior frontend developer and a graphic designer. I like to play music
        and sing for fun.{" "}
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="😃" color="#e6acf1" number={1} />
      <Skill skill="HTML" emoji="😝" color="lightBlue" number={2} />
      <Skill skill="CSS" emoji="👂" color="#66ad66" number={3} />
      <Skill skill="React" emoji="🤜" color="pink" number={4} />
      <Skill skill="Jest" emoji="👀" color="#f7de72" number={5} />
      <Skill skill="Git" emoji="💪" color="#88caff" number={6} />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.number}</span>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
