import React, { useState } from "react";
import MembersCard from "./MembersCard";
import MemberPopup from "./MemberPopup";
import ChairmanData from "../Data/ChairmanData.json";
import MembersData from "../Data/MembersData.json";
import FinalMemberData from "../Data/FinalMemberData.json";

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="members-wrapper" id="jury">
      <div className="members-heading">
        <h1>Committee Members </h1>
        <br />
      </div>

      {/* Chairman Section */}
      <h2 className="section-title">Chairman</h2>
      <div className="section-container single-card">
        {ChairmanData.map((member, index) => (
          <MembersCard
            key={index}
            {...member}
            onKnowMore={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Members Section */}
      <h2 className="section-title">Members</h2>
      <div className="section-container">
        {MembersData.map((member, index) => (
          <MembersCard
            key={index}
            {...member}
            onKnowMore={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Final Section */}
      <div className="section-container single-card">
        {FinalMemberData.map((member, index) => (
          <MembersCard
            key={index}
            {...member}
            onKnowMore={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {selectedMember && (
        <MemberPopup
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
};

export default Members;
