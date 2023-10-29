/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";

const WhatNext = () => {
  return (
    <ResourceSection id="what-next">
      <ResourceSectionHeading>What Next?</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          Pat yourself on the back for making it this far. Do continue to
          practice your skills, write more documentations, and apply for
          technical writing jobs.
        </p>

        <p>
          Feel free to tweet a thank you to us at{" "}
          <a
            className="paragraphLinks"
            href="https://twitter.com/techroadmap__"
            target="_blank"
          >
            @techroadmap__
          </a>{" "}
          on twitter and if you have any questions or comments, feel free to
          send us a dm too or email us at{" "}
          <a
            className="paragraphLinks"
            href="mailto:techcareerroadmap@gmail.com"
            target="_blank"
          >
            techcareerroadmap@gmail.com
          </a>
          . Don&apos;t forget to give us a Star on our{" "}
          <a
            className="paragraphLinks"
            href="https://github.com/Timonwa/techroadmap "
            target="_blank"
          >
            GitHub repo
          </a>
          !
        </p>

        <p>Happy writing!</p>
      </ResourceSectionBody>
    </ResourceSection>
  );
};

export default WhatNext;
