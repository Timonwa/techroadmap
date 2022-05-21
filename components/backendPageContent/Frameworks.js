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

const Frameworks = () => {
  const style = { textAlign: "left" };

  return (
    <ResourceSection id="be-frameworks">
      <ResourceSectionHeading>Backend Frameworks</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Backend frameworks are the most common way to develop web apps. They
          are a set of libraries that are used to build web applications.
          Examples of backend frameworks are ExpressJS, Django, Laravel, Ruby on
          Rails, etc.
        </p>

        <ResourceCardLinks>
          <ResourceLink>
            Nodejs backend frameworks are ExpressJS and Koa.
          </ResourceLink>
          <ResourceLink>Python frameworks are Django and Flask.</ResourceLink>
          <ResourceLink>PHP frameworks are Laravel and Slim.</ResourceLink>
          <ResourceLink>
            Ruby frameworks are Ruby on Rails and Sinatra.
          </ResourceLink>
          <ResourceLink>
            C# frameworks are ASP.NET and ASP.NET Core.
          </ResourceLink>
          <ResourceLink>
            Java frameworks are Spring and Spring Boot.
          </ResourceLink>
          <ResourceLink>Go frameworks are Gin and GORM.</ResourceLink>
          <ResourceLink>Rust frameworks are Rust and Rocket.</ResourceLink>
          <ResourceLink>
            NET frameworks are .NET Core and .NET Framework.
          </ResourceLink>
        </ResourceCardLinks>

        <p>
          Before picking your first backend framework, check these resource(s)
          out;
          <a
            className="resourceLink paragraphLinks"
            href="https://blog.back4app.com/backend-frameworks/">
            Top 10 backend frameworks – Which is the best? ~ Back4App
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/aEc_dR8dhNA">
            Top backend frameworks in 2022 ~ Coding for all by Newton School
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/NwKB4HZnIHM">
            Django vs Flask Comparison ~ Jelvix
          </a>
        </p>

        <ResourceCardLinks>
          <h4 style={style}>Current Frameworks Available</h4>
          <ResourceLink>
            <a href="#expressjs">ExpressJs (NodeJs framework)</a>
          </ResourceLink>
          <ResourceLink>
            <a href="#django">Django (Python framework)</a>
          </ResourceLink>
          <ResourceLink>
            <a href="#flask">Flask (Python framework)</a>
          </ResourceLink>
        </ResourceCardLinks>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*  expressjs */}
        <ResourceCard id="expressjs">
          <ResourceCardTitle>ExpressJS</ResourceCardTitle>
          <p>
            ExpressJS is a web framework for Node.js that is easy to learn and
            use. It is a minimal and flexible framework for building web
            applications. It is designed for building RESTful APIs.
          </p>
          <p>
            Express provides a thin layer of fundamental web application
            features, without obscuring Node.js features that you know and love.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://expressjs.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/SccSCuHhOw0">
                Learn ExpressJs in 35 minutes ~ WebDevSimplified
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO">
                ExpressJs Tutorial for Beginners. ~ ARC Tutorials
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PL_cUvD4qzbkwp6pxx27pqgohrsP8v1Wj2">
                ExpressJs 2022 Course ~ Anson the developers
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=qwfE7fSVaZM">
                Build 4 projects with Nodejs/ExpressJs ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Dkh2IjrAkVI">
                Coffee Shop website with NodeJs and ExpressJs ~ Turbo 360
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.interviewbit.com/blog/node-js-projects/">
                Top 10 Node JS Projects Ideas (With Source Code) ~ InterviewBits
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial">
                Building a REST API with Express, Node, and MongoDB
              </a>
              <ResourceBadge>Article</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  django */}
        <ResourceCard id="django">
          <ResourceCardTitle>Django</ResourceCardTitle>
          <p>
            Django is a high-level Python Web framework that encourages rapid
            development and clean, pragmatic design. It encourages the use of
            object-oriented programming and its use of a model-view-template
            (MVT) design pattern. Django is a Python-based open source web
            framework that is used for developing web applications.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.djangoproject.com/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/rHux0gMZ3Eg">
                Django in 1 hour ~ Programming with Mosh
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.djangoproject.com/">
                Django 7 hour course ~ Travesty Media
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://www.djangoproject.com/">
                Django Tutorial ~ The Net Ninja
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/qPtScmB8CgA">
                Build 3 Django Projects ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  flask */}
        <ResourceCard id="flask">
          <ResourceCardTitle>Flask</ResourceCardTitle>
          <p>
            Flask is a microframework for Python, written in pure Python. It is
            designed to be as simple as possible and easy to learn. It is
            designed to make working with Python web applications easier.
          </p>
          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://flask.palletsprojects.com/en/2.1.x/">
                Website
              </a>
              <ResourceBadge>Link</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/Qr4QMBUPxWo">
                Flask full course for Web application ~ FreeCodeCamp
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLzMcBGfZo4-n4vJJybUVV3Un_NFS5EOgX">
                How to make websites with Python using Flask. ~ Tech with Tim
              </a>
              <ResourceBadge>Playlist</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH">
                Build a full-feature Flask application from scratch ~ Corey
                Schafer
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://youtu.be/yKHJsLUENl0">
                Flask ToDo App ~ Python Engineer
              </a>
              <ResourceBadge>Video</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Frameworks;
