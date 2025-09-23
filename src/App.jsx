import { useState } from "react";
import "./App.css";
import members from "./assets/idols.json";

function App() {
  const [showGroup, setShowGroup] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="landing">
      {/* Header logo tulisan */}
      <header className="header">
        <img
          src="src/assets/img/18.png"
          alt="hearts2hearts"
          className="title-logo"
        />
      </header>

      {/* Card container */}
      <div
        className="card-container"
        onClick={() => setShowGroup(!showGroup)}
      >
        {!showGroup ? (
          <img
            src="src/assets/img/17.png"
            alt="Logo Group"
            className="logo-card"
          />
        ) : (
          <img
            src="src/assets/img/0.jpeg"
            alt="Foto Grup"
            className="group-card"
          />
        )}
      </div>

      {/* Running Text */}
      <div className="running-text">
        <div className="running-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              <img src="src/assets/img/1.png" alt="mini1" className="running-icon" />
              <img src="src/assets/img/2.png" alt="mini2" className="running-icon" />
              <img src="src/assets/img/3.png" alt="mini3" className="running-icon" />
              <img src="src/assets/img/4.png" alt="mini4" className="running-icon" />
              <img src="src/assets/img/5.png" alt="mini5" className="running-icon" />
              <img src="src/assets/img/6.png" alt="mini6" className="running-icon" />
              <img src="src/assets/img/7.png" alt="mini7" className="running-icon" />
              <img src="src/assets/img/8.png" alt="mini8" className="running-icon" />
            </span>
          ))}
        </div>
      </div>

      {/* Member Cards props */}
      <section className="article-section">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            member={member}                      // props data
            isOpen={openCard === index}          // props status
            onClick={() =>
              setOpenCard(openCard === index ? null : index)
            }                                   // props function
          />
        ))}
      </section>
    </div>
  );
}

function MemberCard({ member, isOpen, onClick }) {
  return (
    <div
      className={`member-card ${isOpen ? "open" : ""}`}
      onClick={onClick}
    >
      <div className="member-inner">
        <div className="member-photo">
          <img src={member.image} alt={member.stageName} />
        </div>
        <div className="member-bio">
          <h2>{member.stageName}</h2>
          <p><strong>Real Name:</strong> {member.realName}</p>
          <p><strong>Age:</strong> {member.age}</p>
          <p><strong>Birthday:</strong> {member.birthday}</p>
          <p><strong>Position:</strong> {member.position}</p>
          <p><strong>Nationality:</strong> {member.nationality}</p>
        </div>
      </div>
    </div>
  );
}

export default App;