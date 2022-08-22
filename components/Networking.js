/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceSection } from "../styles/styled-components/ResourceSection.styled.js";
import { ResourceSectionHeading } from "../styles/styled-components/ResourceSectionHeading.styled.js";
import { ResourceSectionLinks } from "../styles/styled-components/ResourceSectionLinks.styled.js";
import { ResourceCard } from "../styles/styled-components/ResourceCard.styled.js";
import { ResourceCardTitle } from "../styles/styled-components/ResourceCardTitle.styled.js";
import { ResourceCardBody } from "../styles/styled-components/ResourceCardBody.styled.js";
import { ResourceCardLinks } from "../styles/styled-components/ResourceCardLinks.styled.js";
import { ResourceLink } from "../styles/styled-components/ResourceLink.styled.js";
import { ResourceBadge } from "../styles/styled-components/ResourceBadge.styled.js";

const Networking = () => {
  return (
    <ResourceSection id="networking">
      <ResourceSectionHeading>Networking</ResourceSectionHeading>

      <ResourceSectionLinks>
        {/* tech communities */}
        <ResourceCard id="communities">
          <ResourceCardTitle>Tech Communities</ResourceCardTitle>

          <ResourceCardBody>
            <p>
              Joining a Tech Community is the easiest way to network with and
              learn from other techies in the industry for free. You get to
              connect to other techies with different levels of expertise,
              network and socialize, attend tech events, ask questions and get
              answers from experts and professionals, share and learn from other
              people&apos;s experiences, etc. Below are a few of the most
              popular tech communities:
            </p>
          </ResourceCardBody>

          <ResourceCardLinks>
            <ResourceLink>
              <a
                target="_blank"
                href="https://developers.google.com/community/gdg">
                Google Developers Group (GDG)
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href=" https://developers.google.com/community/dsc/clubs">
                Google Developer Student Club (DSC)
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://shecodeafrica.org/">
                She Code Africa (SCA)
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://oscafrica.org/">
                Open Source Community Africa (OSCA)
              </a>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href=" https://devcareer.io/">
                Developer Career
              </a>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href=" https://developers.google.com/community/dsc/clubs">
                Google Developer Student Club (DSC)
              </a>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* bootcamps */}
        <ResourceCard id="bootcamps">
          <ResourceCardTitle>Bootcamps</ResourceCardTitle>

          <ResourceCardBody>
            <p>
              Bootcamps are created to help one with little to no experience in
              coding gain programming skills by offering them technical training
              on the relevant skills. They focus on the most important aspects
              of coding while allowing one to apply these new skills to solve
              real-life problems. They are like schools and some of them offer
              Certificates/Diplomas upon completion. Most of them are not free.
              Below are a few of the most popular bootcamps:
            </p>
          </ResourceCardBody>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://decagon.institute/">
                Decagon
              </a>
              <ResourceBadge>Not Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://enyata.com/academy">
                Enyata
              </a>
              <ResourceBadge>Free</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://altschoolafrica.com">
                AltSchool Africa
              </a>
              <ResourceBadge>Not Free</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>

        {/* Internships and Mentoring */}
        <ResourceCard id="internships">
          <ResourceCardTitle>Internships and Mentoring</ResourceCardTitle>

          <ResourceCardBody>
            <p>
              Internships are a period of work often taken to gain professional
              learning experience relating to a field of study or career
              interest. You also get to be mentored by seniors and experts in
              your field from different parts of the world, sometimes even
              working on real-life projects. It can be paid or unpaid. You can
              find below, a list of organizations that offer coding internships
              and run bootcamps in the tech field.
            </p>
          </ResourceCardBody>

          <ResourceCardLinks>
            <ResourceLink>
              <a target="_blank" href="https://www.outreachy.org/">
                Outreachy
              </a>
              <ResourceBadge>Paid</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://the-collab-lab.codes/">
                The Collab Lab
              </a>
              <ResourceBadge>Paid</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://internshala.com/">
                Internshala
              </a>
              <ResourceBadge>Paid</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a
                target="_blank"
                href="https://twitter.com/hnginternship?t=FNo8Fg7sQj53daEh0mCuew&s=09">
                HNG Internship
              </a>
              <ResourceBadge>Unpaid</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://internship.sidehustle.ng/">
                SideHustle.ng
              </a>
              <ResourceBadge>Unpaid</ResourceBadge>
            </ResourceLink>
            <ResourceLink>
              <a target="_blank" href="https://internship.zuri.team/">
                Zuri Team
              </a>
              <ResourceBadge>Unpaid</ResourceBadge>
            </ResourceLink>
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Networking;
