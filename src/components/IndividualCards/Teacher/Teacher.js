import React from "react";
import CustomCard3 from "../../Card-wrapper/CustomCard3";
import ButtonInCard from "../../Button-in-card/Button-in-card";

import "./Teacher.css";

let skills = [
  "Planning Lessons",
  "Collaborating with faculty members",
  "Communicating with students, parents, supervisors, etc.",
  "Engaging and participating in Professional Development sessions and/or workshops",
  "Teaching to the district, county, and/or state requirements and standards and beyond",
  "Creating content that engages students",
  "Working with paraprofessionals, co-teachers, special education teachers",
  "Accommodating instruction and materials for students",
  "Differentiating Instruction",
  "Supervising students learning online",
  "Participating in all kinds of meetings",
];

const Teacher = ({ title, id, cardNum }) => {
  return (
    <CustomCard3 id={id} cardNum={cardNum} title={title}>
      <h3 className="teacherSubtitle">
        Math teacher licensed to teach in Virginia, West Virginia,
        Tennessee, and South Carolina.
      </h3>
      <h3 className="teacherSubtitle">
        Taught to schools in TN, SC, and other states while working for Proximity Learning.
      </h3>
      <h3 className="teacherSubtitle">
        Taught at brick-and-mortar schools in both WV and VA my first five
        years.
      </h3>
      <h3 className="teacherSubtitle">
        Here's a list of skills that are common to all my teaching jobs so far.
      </h3>
      <div className="teacherPillParent">
        {skills.map((el, index) => {
          return (
            <span key={index} className="teacherPill">
              {el}
            </span>
          );
        })}
      </div>
      <h3 className="teacherSubtitle">Online Activity</h3>
      <div className="teacherPillParent">
        <p className="teacherPill">
          <a
            href={"https://www.teacherspayteachers.com/Store/Yatrik-Patel"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Find my products on Teachers Pay Teachers"}
          </a>
        </p>
        <p className="teacherPill">
          <a
            href={"https://www.youtube.com/channel/UCfUeFFSqv4i0O9X6wzxojQA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"A Few Videos I've made in the past"}
          </a>
        </p>
      </div>
      <ButtonInCard nextCardIdAndUrl="contact" bgColor="pink" />
    </CustomCard3>
  );
};

export default Teacher;
