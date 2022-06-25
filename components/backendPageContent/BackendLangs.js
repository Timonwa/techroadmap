/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const BackendLangs = () => {
  const style = { textAlign: "left" };
  return (
    <>
      <ResourceSection id="backend-lang">
        <ResourceSectionHeading>
          Backend Development Languages
        </ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
            Backend development languages are used to develop the backend of the
            application. The languages used in backend development are Node.js,
            PHP, Python, Java, C#, Ruby, C++, C, Go, and .NET. You can learn
            more about these below:
          </p>
          <p>
            Before picking your first backend language, check these resource(s)
            out;
            <a
              className="resourceLink paragraphLinks"
              href="https://www.freecodecamp.org/news/what-programming-language-should-i-learn-first-19a33b0a467d/">
              What Programming Language Should I Learn First in 2022? ~
              FreeCodeCamp
            </a>
            <a
              className="resourceLink paragraphLinks"
              href="https://youtu.be/H8v44CqZwYs">
              The best programming language for web development ~ Programming
              with Dan
            </a>
          </p>

          <ResourceCardLinks>
            <h4 style={style}>Current Languages Available</h4>
            <ResourceLink>
              <a href="#nodejs">Node.js</a>
            </ResourceLink>
            <ResourceLink>
              <a href="#python">Python</a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceSectionBody>
      </ResourceSection>

      {/*  nodejs */}
      <ResourceSection id="nodejs">
        <ResourceSectionHeading>Node.js (Javascript)</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
            Node.js is a JavaScript runtime built on Chrome&apos;s V8 JavaScript
            engine. Node.js uses an event-driven, non-blocking I/O model that
            makes it lightweight and efficient. Node.js&apos; package ecosystem,
            npm, is the largest ecosystem of open source libraries in the world.
          </p>
          <p>Here are some resources to help you get started with NodeJS:</p>
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/PkZNo7MFNFg">
                  Learn JavaScript. Full course for beginners. ~ FreeCodeCamp
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=ENrzD9HAZK4">
                  Node.js Ultimate Beginner&apos;s Guide in 7 Easy Steps ~
                  Fireship
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=TlB_eWDSMt4">
                  Node.js tutorial for Beginners: Learn Node in 1 Hour ~ Mosh
                  Hamedani
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=Oe421EPjeBE">
                  Node.js and Express.js - Full Course ~ freeCodeCamp.org
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* playlist */}
          <ResourceCard>
            <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET">
                  JavaScript Tutorials for beginners. ~ The Net Ninja
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU">
                  Node.js Crash Course Tutorial ~ The Net Ninja
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">
                  JavaScript Algorithms and Data Structures. ~ FreeCodeCamp
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/back-end-development-and-apis/">
                  Back End Development and APIs (NodeJs) ~ FreeCodeCamp
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.w3schools.com/nodejs/default.asp">
                  Node.js Tutorial ~ W3Schools
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* articles */}
          <ResourceCard>
            <ResourceCardTitle>Articles</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/">
                  Var, Let and Const - What&apos;s the difference? ~
                  FreeCodeCamp
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* practical projects */}
          <ResourceCard>
            <ResourceCardTitle>Practice Projects</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.interviewbit.com/blog/node-js-projects/">
                  Top 10 Node JS Projects Ideas (With Source Code)
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* others */}
          <ResourceCard>
            <ResourceCardTitle>Others</ResourceCardTitle>
            <p className="resource-card-body">
              Tips and tricks, tools, cool examples etc.
            </p>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="#"></a>
                <ResourceBadge></ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>

      {/*  Python */}
      <ResourceSection id="python">
        <ResourceSectionHeading>Python</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
            Python is a powerful multi-purpose programming language. It is very
            easy to learn as it features a syntax more similar to English
            Language than other programming languages.
          </p>
          <p>
            Python is a very fun and beginner-friendly programming language with
            a pretty shallow learning curve.
          </p>
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/kqtD5dpn9C8">
                  Python for Beginners - Learn Python in 1 hour ~ Programming
                  with Mosh
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=_uQrJ0TkZlc">
                  Python Tutorial - Python Full Course for Beginners ~
                  Programming with Mosh
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=jBzwzrDvZ18">
                  Python Backend Web Development Course (with Django) ~
                  freeCodeCamp.org
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* playlist */}
          <ResourceCard>
            <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3">
                  Python Tutorials ~ Telusko
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.w3schools.com/python/">
                  Python Tutorial ~ W3Schools
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* articles */}
          <ResourceCard>
            <ResourceCardTitle>Articles</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://dev.to/javinpaul/10-python-articles-you-can-read-this-weekend-2df8">
                  10 Python Articles you can read this weekend
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* practical projects */}
          <ResourceCard>
            <ResourceCardTitle>Practice Projects</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/news/python-projects-junior-developers/">
                  11 Python Projects Junior Developers Can Build for Coding
                  Practice ~ FreeCodeCamp
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://realpython.com/intermediate-python-project-ideas/">
                  13 Project Ideas for Intermediate Python Developers ~
                  RealPython
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/8ext9G7xspg/">
                  12 beginner Python projects ~ FreeCodeCamp
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://youtu.be/XGf2GcyHPhc">
                  Learn Python by building 5 games ~ FreeCodeCamp
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* others */}
          <ResourceCard>
            <ResourceCardTitle>Others</ResourceCardTitle>
            <p className="resource-card-body">
              Tips and tricks, tools, cool examples etc.
            </p>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="#"></a>
                <ResourceBadge></ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
      
      
      {/*  C */}
      <ResourceSection id="c">
        <ResourceSectionHeading>C</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
          C is one of the high-level programming languages developed by Dennis Ritchie. C was originally developed for UNIX operating system to beat the issues of previous languages such as B, BCPL, etc.
           The UNIX operating system development started in the year 1969, and its code was rewritten in C in the year 1972.
          </p>
          
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.youtube.com/watch?v=KJgsSFOSQv0">
                 C Programming Tutorial for Beginners ~ freeCodeCamp.org
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=87SH2Cn0s9A">
                  C Full Course -Learn to code today ~
                  Bro Code
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* playlist */}
          <ResourceCard>
            <ResourceCardTitle>Curated Playlist</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PLsyeobzWxl7oBxHp43xQTFrw9f1CDPR6C">
                  C Programming Tutorial for Beginners ~ Telusko
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.udemy.com/course/c-programming-2019-master-the-basics/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-o0Hwi9OaKJw93uZ67mUGHA&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads">
                C Programming : Master The Basics! ~ Udemy
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* articles */}
          <ResourceCard>
            <ResourceCardTitle>Articles</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/news/the-c-beginners-handbook/">
                  The C Beginner's Handbook
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* practical projects */}
          <ResourceCard>
            <ResourceCardTitle>Practice Projects</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.interviewbit.com/blog/c-projects/?amp=1">
                  15+ C Projects Ideas With Source Code ~
                  interviewbit
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.emertxe.com/embedded-systems/c-programming/c-projects/">
                Advanced C Programming ~ emertxe
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* others */}
          <ResourceCard>
            <ResourceCardTitle>Others</ResourceCardTitle>
            <p className="resource-card-body">
              Tips and tricks, tools, cool examples etc.
            </p>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.techbeamers.com/top-c-programming-tips-and-tricks-for-you/">
                C Programming Tips and Tricks for Beginners
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
    
    </>
  );
};

export default BackendLangs;
