import { useState } from "react";
import "./App.css";
import members from "./assets/idols.json";
import logoTitle from "./assets/img/18.png";
import logoCard from "./assets/img/17.png";
import groupPhoto from "./assets/img/0.jpeg";
import mini1 from "./assets/img/1.png";
import mini2 from "./assets/img/2.png";
import mini3 from "./assets/img/3.png";
import mini4 from "./assets/img/4.png";
import mini5 from "./assets/img/5.png";
import mini6 from "./assets/img/6.png";
import mini7 from "./assets/img/7.png";
import mini8 from "./assets/img/8.png";

function App() {
  const [showGroup, setShowGroup] = useState(false);
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <img src={logoTitle} alt="hearts2hearts" className="title-logo" />
      </header>

      {/* Card container */}
      <div className="card-container" onClick={() => setShowGroup(!showGroup)}>
        <img
          src={showGroup ? groupPhoto : logoCard}
          alt="Group"
          className={showGroup ? "group-card" : "logo-card"}
        />
      </div>

      {/* Running Text */}
      <div className="running-text">
        <div className="running-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              {[mini1, mini2, mini3, mini4, mini5, mini6, mini7, mini8].map(
                (icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`mini${index + 1}`}
                    className="running-icon"
                  />
                )
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Member Cards */}
      <section className="article-section">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            member={member}
            isOpen={openCard === index}
            onClick={() => setOpenCard(openCard === index ? null : index)}
          />
        ))}
      </section>
    </div>
  );
}

function MemberCard({ member, isOpen, onClick }) {
  return (
    <div className={`member-card ${isOpen ? "open" : ""}`} onClick={onClick}>
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
