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
            <ResourceLink>
              <a href="#c">C</a>
            </ResourceLink>
            <ResourceLink>
              <a href="#CPP">C&#43;&#43;</a>
            </ResourceLink>
            <ResourceLink>
              <a href="#Java">Java</a>
            </ResourceLink>
            <ResourceLink>
              <a href="#CSHARP">C#</a>
            </ResourceLink>
            <ResourceLink>
              <a href="#GO">Go</a>
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
                  C Full Course - Learn to code today ~
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
                  The C Beginner&apos;s Handbook ~ freeCodeCamp.org
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
                C Programming Tips and Tricks for Beginners ~ techbeamers
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>

      {/*  C ++ */}

      <ResourceSection id="CPP">
        <ResourceSectionHeading>C&#43;&#43;</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
          The C&#43;&#43; programming language was invented in 1979 by Bjarne Stroustrup while working on his PhD thesis at Bell Labs. C&#43;&#43; was designed to be an extension of the programming language C, hence its original name, “C with Classes”. Stroustrup&#39;s goal was to add flexibility and OOP (object-oriented programming) to the C language. He included features such as classes, strong type checking, default function arguments, and basic inheritance. The name was changed to C&#43;&#43; in 1983, which derives from the &#43;&#43; operator.

          </p>
          
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.youtube.com/watch?v=8jLOx1hD3_o">
                C&#43;&#43; Programming Course - Beginner to Advanced ~ freeCodeCamp.org
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=GQp1zzTwrIg">
                  C&#43;&#43; FULL COURSE For Beginners ~ CodeBeauty
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
                  href="https://youtube.com/playlist?list=PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C">
                  C&#43;&#43; Programming Video Tutorial ~ LearningLad
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PLS1QulWo1RIYSyC6w2-rDssprPrEsgtVK">
                  C&#43;&#43; Tutorial for Beginners ~ ProgrammingKnowledge
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.udacity.com/course/c-for-programmers--ud210?irclickid=znLyVwSpsxyIRGAw3s3-n1VaUkDwXRzxqRu5Uo0&irgwc=1&utm_source=affiliate&utm_medium=&aff=2558440&utm_term=&utm_campaign=__&utm_content=&adid=786224">
                C&#43;&#43; For Programmers ~ Udacity
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
                  href="https://www.educative.io/blog/how-to-learn-cpp-the-guide-for-beginners">
                  Learn C&#43;&#43; from scratch: The complete guide for beginners ~ Educative
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
                  href="https://www.dunebook.com/c-project-ideas-for-beginners/">
                  18 C&#43;&#43; Project Ideas for Beginners ~
                  dunebook
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://ssiddique.info/c-projects-ideas-beginners-experts.html">
                10 Intermediate C&#43;&#43; Projects Ideas ~ ssiddique
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
                <a target="_blank" href="https://betterprogramming.pub/8-neat-c-programming-tricks-you-should-know-be331b828be1">
                8 Neat C&#43;&#43; Programming Tricks You Should Know ~ betterprogramming
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://codeforces.com/blog/entry/74684">
                C&#43;&#43; tips and tricks ~ codeforces
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
    
    {/*  JAVA */}
    <ResourceSection id="Java">
        <ResourceSectionHeading>Java</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
          Java is a high-level, class-based, object-oriented programming language. It is a general-purpose programming language intended to let programmers write once, run anywhere meaning that compiled Java code can run on all platforms that support Java without the need to recompile.Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.
          </p>
          
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.youtube.com/watch?v=xk4_1vDrzzo">
                Java Full Course ~ Bro Code
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=grEKMHGYyns">
                  Learn Java 8 - Full Tutorial for Beginners ~ freeCodeCamp.org
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
                  href="https://www.youtube.com/playlist?list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al">
                  Java Tutorial For Beginners ~ ProgrammingKnowledge
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK">
                  Java Tutorial For Beginners ~ Telusko
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.udemy.com/course/java-tutorial/">
                Java Tutorial for Complete Beginners ~ Udemy
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.udacity.com/course/java-programming-basics--ud282">
                Java Programming BasicsJava Tutorial for Complete Beginners ~ Udacity
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.udacity.com/course/object-oriented-programming-in-java--ud283">
                Object Oriented Programming in Java ~ Udacity
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
                  href="https://medium.com/javarevisited/10-articles-java-developers-should-read-this-week-7648edd18a22">
                  10 Articles Java Developers Should Read this Week ~ Medium
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
                  href="https://hackr.io/blog/java-projects">
                  10 Best Java Projects for Beginners 2022 ~
                  hackr
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.interviewbit.com/blog/java-projects/">
                Top 15 Java Projects ~ interviewbit
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
                <a target="_blank" href="https://www.geeksforgeeks.org/interesting-and-cool-tricks-in-java/">
                Interesting and Cool Tricks in Java ~ geeksforgeeks
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://blogs.oracle.com/javamagazine/post/java-11-tricks-generics-inheritance-jshell">
                11 great Java tricks from dev.java ~ oracle
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
      {/*  C# */}
      <ResourceSection id="CSHARP">
        <ResourceSectionHeading>C#</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
          C# is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in . NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.
          </p>
          
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.youtube.com/watch?v=gfkTfcpWqAY">
                C# Tutorial For Beginners - Learn C# Basics ~ Programming with Mosh
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=GhQdlIFylQ8">
                  C# Tutorial - Full Course for Beginners ~ freeCodeCamp.org
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=0QUgvfuKvWU">
                  C# Fundamentals for Beginners ~ Microsoft Developer
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
                  href="https://youtube.com/playlist?list=PLAC325451207E3105">
                  C# tutorial for beginners ~ kudvenkat
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://youtube.com/playlist?list=PL_c9BZzLwBRIXCJGLd4UzqH34uCclOFwC">
                  C# Tutorials ~ Caleb Curry
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.w3schools.com/cs/index.php">
                C# Tutorial ~ w3schools
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.udemy.com/course/understandingc/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-B2KTq7VSIAY.6Nt9_Xy1bw&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads">
                Fundamentals of Programming: Understanding C# ~ Udemy
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.udemy.com/course/c-from-beginner-to-pro-build-a-windowsui-app-in-winforms/?ranMID=39197&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-X.phEnJd4UQKI.nJTnkGvg&LSNPUBID=JVFxdTr9V80&utm_source=aff-campaign&utm_medium=udemyads">
                C# From Beginner To Pro - Write A WindowsUI Style App Form ~ Udemy
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
                  href="https://www.toptal.com/c-sharp/top-10-mistakes-that-c-sharp-programmers-make">
                  The 10 Most Common Mistakes in C# Programming ~ toptal
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
                  href="https://projectsgeek.com/c-sharp-projects-beginners-source-code">
                  C# projects for Beginners ~ projectsgeek
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                  target="_blank" 
                  href="https://dev.to/nerdjfpb/15-c-project-ideas-beginner-to-expert-with-tutorial-iio">
                  15 C# Project Ideas: Beginner to Expert ~ dev
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
                <a 
                  target="_blank" 
                  href="https://cpratt.co/async-tips-tricks/">
                  C# Async Tips and Tricks ~ cpratt
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                  target="_blank" 
                  href="https://hackernoon.com/top-25-c-programming-tips-xlo31wv">
                  Top 25 C# Programming Tips ~ hackernoon
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                   target="_blank" 
                   href="https://medium.com/codex/c-coding-tricks-you-need-to-know-in-2021-f0ddf4f86b58">
                   4 Easy C# Programming Tricks in 2022 ~ medium
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>
        </ResourceSectionLinks>
      </ResourceSection>
     
     {/*  Go */}
     <ResourceSection id="GO">
        <ResourceSectionHeading>Go</ResourceSectionHeading>

        <ResourceSectionBody>
          <p>
          Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.It is syntactically similar to C, but with memory safety, garbage collection, structural typing,and CSP-style concurrency.It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.
          </p>
          
        </ResourceSectionBody>

        <ResourceSectionLinks>
          {/* videos */}
          <ResourceCard>
            <ResourceCardTitle>Videos</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.youtube.com/watch?v=yyUHQIec83I">
                Golang Tutorial for Beginners | Full Go Course ~ TechWorld with Nana
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=YS4e4q9oBaU">
                  Learn Go Programming - Golang Tutorial for Beginners ~ freeCodeCamp.org
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=ty49_v1tV44">
                  Go Tutorial Basic | Golang ~ Telusko
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
                  href="https://youtube.com/playlist?list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa">
                  Let&apos;s go with golang ~ Hitesh Choudhary
                </a>
              </ResourceLink>
              <ResourceLink>
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PLS1QulWo1RIaRoN4vQQCYHWDuubEU8Vij">
                  Go Programming Language Tutorial  ~ ProgrammingKnowledge
                </a>
              </ResourceLink>
            </ResourceCardLinks>
          </ResourceCard>

          {/* Free Courses */}
          <ResourceCard>
            <ResourceCardTitle>Free Courses</ResourceCardTitle>
            <ResourceCardLinks>
              <ResourceLink>
                <a target="_blank" href="https://www.w3schools.com/go/">
                Go Tutorial ~ w3schools
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.udemy.com/course/getgoing/?ranMID=39197&ranEAID=CuIbQrBnhiw&ranSiteID=CuIbQrBnhiw-l8y136DdFL9FKYh_1SvyUQ&LSNPUBID=CuIbQrBnhiw&utm_source=aff-campaign&utm_medium=udemyads">
                GetGoing: Introduction to Golang ~ Udemy
                </a>
              </ResourceLink>
              <ResourceLink>
                <a target="_blank" href="https://www.tutorialspoint.com/go/">
                Go Tutorial - Write A WindowsUI Style App Form ~ Tutorialspoint
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
                  href="https://www.infoworld.com/article/3198928/whats-the-go-programming-language-really-good-for.html">
                  What the Go programming language really good for? ~ infoworld
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
                  href="https://www.youtube.com/watch?v=jFfo23yIWac">
                  Learn Go Programming by Building 11 Projects ~ freecodecamp
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                  target="_blank" 
                  href="https://youtube.com/playlist?list=PL5dTjWUk_cPYztKD7WxVFluHvpBNM28N9">
                  36 KILLER GOLANG Projects in 36 Different Videos  ~ Akhil Sharma
                </a>
                <ResourceBadge>Video</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                  target="_blank" 
                  href="https://youtube.com/playlist?list=PLQ9_95hffac8_0bj5oeCe4FdxeNZi0UJ2">
                  Resturant Mangment - GoLang Full Project  ~ Abdulrahman Masoud
                </a>
                <ResourceBadge>Video</ResourceBadge>
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
                <a 
                  target="_blank" 
                  href="https://go101.org/article/tips.html">
                  Go Tips 101 ~ go101
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                  target="_blank" 
                  href="https://golangtutorial.dev/tips/">
                  Useful Go language Tips and tricks ~ golangtutorial
                </a>
                <ResourceBadge>Article</ResourceBadge>
              </ResourceLink>
              <ResourceLink>
                <a 
                   target="_blank" 
                   href="https://dev.to/farisj/go-tips-tricks-54o4">
                   Go Tips and Tricks ~ dev
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
