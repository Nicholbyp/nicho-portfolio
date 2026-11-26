
import Image from "next/image";

import {
  Column,
  Text,
  Schema,
  Meta,
  Button,
} from "@once-ui-system/core";

import { home, about, person, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";
import styles from "./page.module.scss";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });

  return {
    ...metadata,
    alternates: { canonical: metadata.openGraph.url },
  };
}

export default function Home() {
  return (
    <Column maxWidth="xl" gap="xl" paddingY="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.welcome}>
          WELCOME TO MY PORTFOLIO
        </div>

        <div className={styles.portraitArea}>
          {/* Moving name behind portrait */}
          <div className={styles.marquee} aria-hidden="true">
            <div className={styles.marqueeTrack}>
              <div className={styles.marqueeGroup}>
                <span>NICHO BAYU PRADITYA — </span>
                <span>NICHO BAYU PRADITYA — </span>
              </div>
              <div className={styles.marqueeGroup}>
                <span>NICHO BAYU PRADITYA — </span>
                <span>NICHO BAYU PRADITYA — </span>
              </div>
            </div>
          </div>

          {/* Graduation portrait */}
          <div className={styles.portrait}>
            <Image
              src="/images/fotoku.png"
              alt="Nicho Bayu Praditya graduation portrait"
              width={900}
              height={1100}
              priority
              className={styles.portraitImage}
            />
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className={styles.introduction}>
          <h1>Hi, I'm Nicho.</h1>

          <div className={styles.roles}>
            <span>CUSTOMER SERVICE</span>
            <span className={styles.dot}>·</span>
            <span>IT SUPPORT</span>
            <span className={styles.dot}>·</span>
            <span>DIGITAL OPERATIONS</span>
          </div>

          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            wrap="balance"
          >
            An Informatics Engineering graduate who enjoys exploring technology,
            solving problems, assisting people, and creating positive service
            experiences. Interested in IT support, customer service, hospitality,
            and digital operations. Always curious, always learning.
          </Text>

          {/* ACTION BUTTONS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            <Button
              href="/about"
              variant="secondary"
              size="m"
              suffixIcon="arrowUpRight"
            >
              Explore About
            </Button>

            <Button
              href="/cv.pdf"
              variant="primary"
              size="m"
              prefixIcon="download"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className={styles.scrollHint}>
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* PROJECTS */}
      <Column fillWidth gap="xl">
        <Projects range={[1, 1]} />
        <Projects range={[2]} />
      </Column>
    </Column>
  );
}
