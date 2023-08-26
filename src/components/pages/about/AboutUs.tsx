import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-full grid grid-cols-1 gap-y-10 mt-4 p-4">
      <h3 className="text-5xl font-black capitalize">About the team</h3>
      <div className="text-2xl">
        <p>
          We are a bunch of developers who create open-source projects. <br />
        </p>
        <br />
        <p>
          We want to make useful products that are beginner freindly and upskill
          ourselves at the same time.
          <br />
          <br />
          Our vision is to help beginners write their first line of code, write
          their first technical document/post and contribute to open-source
          projects.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
