import React from "react";
import TeamMemberCard from "../../utilities/TeamMemberCard/TeamMemberCard";
import "./TeamMember.css";
const TeamMembers=()=>{
    return (
        <>
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
                    <h2 className="mb-5">Meet Our Team Members</h2>
                </div>
                <div className="row g-4">
                    <TeamMemberCard name="Full Name" designation="Designation" imageSource="Image/team-1.jpg" />
                    <TeamMemberCard name="Full Name" designation="Designation" imageSource="Image/team-2.jpg" />
                    <TeamMemberCard name="Full Name" designation="Designation" imageSource="Image/team-3.jpg" />
                    <TeamMemberCard name="Full Name" designation="Designation" imageSource="Image/team-4.jpg" />
                </div>
            </div>
        </div>
        </>
    )
}
export default TeamMembers;