import React, { useState } from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card';
import './AboutMe.css';

const AboutMe = ({ title, id, cardNum }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <CustomCard3
      id={id}
      cardNum={cardNum}
      title={title}>
      <p className="aboutMePara1">
        I am a Web Developer at Virginia Tech who formerly taught math in
        schools across various US states.{' '}
        <span
          className="readMore"
          onClick={() => setReadMore((readMore) => !readMore)}>
          {!readMore
            ? 'Click here to read more...'
            : 'Click here to read less...'}
        </span>
      </p>
      <div>
        {readMore && (
          <>
            <p className="aboutMePara1">
              My first exposure to programming was in college when I learned its
              basics using QBasic, Visual Basic, Mathematica, and Maple. At that
              time, I was planning to become a math teacher and had no idea
              about what I was learning. After graduating from college and
              teaching for a year, I felt as if something was missing. It was
              then that I came across online platforms like Khan Academy, where
              I started to learn JavaScript.
            </p>
            <p className="aboutMePara1">
              Learning on platforms like Khan Academy did not prepare me for any
              official jobs though. Hence, over the next four years, I continued
              to teach as my primary job and dived deeper into programming in my
              free time. I still did not feel quite ready for developing though.
              Fortunately, however, in December of 2018, I applied and gained a
              scholarship from Google in partnership with Udacity. It was called
              Grow with Google Challenge Scholarship and allowed me to select a
              field of learning. At that time, I chose to learn Android
              Development.
            </p>
            <p className="aboutMePara1">
              Taking the Android course from above exposed me to many developer
              tools, languages, frameworks, Integrated Development Environments,
              etc. It prepared me to build real projects from scratch all the
              way up to learning advanced concepts such as working with
              databases, APIs, etc. To supplement this, I took courses from
              Udemy, which exposed me to building games in Android, implementing
              authentication, syncing data in real-time, storing data in the
              cloud, setting up SSH, and so much more.
            </p>
            <p className="aboutMePara1">
              The skills gained above did not feel enough, so I thought of
              taking a different route. Earlier in 2019, I started learning web
              development by taking some online courses, and I cannot imagine
              how much I have learned ever since. Now, I’ve experienced and am
              pretty good at setting up and running servers, building REST APIs,
              using Docker, Redis, setting up authentication, following best
              practices for storing data, understanding Data Structures and
              Algorithms, using React, Redux, Redux-Saga, SASS,
              styled-components, optimizing apps using code-splitting, lazy
              loading, dynamic imports, storing data in POSTGRES, Firebase
              Storage, MongoDB, etc.
            </p>
            <p className="aboutMePara1">
              {`All this sounds fancy, but to see it for yourself, you should
              check out my projects included in this site. Apart from this, I
              sell math lessons online and have occasionally made math YouTube
              videos when needed. These skills can be easily brought over to
              development as well. I have taken a couple of Master’s degree level 
              courses in Cryptology, and Graph Theory via the University of Texas 
              Rio Grande Valley. I also have a Master's degree in Informational 
              Technology from Virginia Tech.`}
            </p>
            <p className="aboutMePara1">
              I hope this clarifies and provides enough information about my
              background as it pertains to programming.
            </p>
            <p className="aboutMePara1">
              By the way, my best project so far (outside of work) is one that I
              cannot share online. It is a full-stack application that I once
              tried to convert into a SASS product. However, things did not go
              as expected when I started to share that application with others.
              Soon, I had to take the application offline. I still have videos
              and stories of that product that I can share once we get in touch.
            </p>
          </>
        )}
      </div>

      <ButtonInCard
        nextCardIdAndUrl="projects"
        bgColor="pink"
      />
    </CustomCard3>
  );
};

export default AboutMe;
