
import {
  Column,
  Heading,
  Media,
  Meta,
  Schema,
  Text,
  Row,
  Tag,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const certificates = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "3 June 2026 - 3 June 2029",
    category: "Professional Certification",
    image: "/images/certificates/jwp.jpeg",
  },
  {
    title: "Certificate of Achievement – TOEFL Prediction Test",
    issuer: "Central Course",
    date: "28 November 2026",
    category: "Language",
  },
  {
    title: "English Proficiency Test (EPT)",
    issuer: "English Proficiency Test",
    date: "30 September 2026",
    category: "Language",
    image: "/images/certificates/ept.jpeg",
  },
  {
    title: "Computer and Network Engineering Competency Test",
    issuer: "SMK Muhammadiyah 1 Sukoharjo",
    date: "April 2022",
    category: "Technical Competency",
    image: "/images/certificates/tkj.jpeg",
  },
  {
    title: "Secure The Future: Strategic Keamanan di Era Inovasi Digital",
    issuer: "Seminar Nasional - Universitas Duta Bangsa",
    date: "28 June 2025",
    category: "Seminar",
    image: "/images/certificates/securethefuture.jpeg",
  },
  {
    title: "Seminar Nasional Teknologi Informasi dan Bisnis (SENATIB)",
    issuer: "Universitas Duta Bangsa",
    date: "26 July 2025",
    category: "Seminar",
    image: "/images/certificates/senatib.jpeg",
  },
  {
    title: "Visiting Lecture UNIMY",
    issuer: "UNIMY",
    date: "14 June 2025",
    category: "Academic",
    image: "/images/certificates/unimy.jpeg",
  },
  {
    title: "Communication Bootcamp",
    issuer: "Training & Development",
    date: "8 August 2025",
    category: "Training",
    image: "/images/certificates/bootcamp.jpeg",
  },
];

export async function generateMetadata() {
  const title = "Certificates";
  const description =
    "Professional certifications, technical qualifications, and learning achievements.";

  return Meta.generate({
    title,
    description,
    baseURL,
    path: "/certificates",
  });
}

export default function Certificates() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Certificates"
        description="Professional certifications and achievements."
        path="/certificates"
        author={{
          name: person.name,
          url: `${baseURL}/certificates`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth gap="m" marginBottom="40">
        <Heading variant="display-strong-xl">
          Certificates
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Professional certifications, technical qualifications, and
          learning achievements that support my experience in IT and
          digital operations.
        </Text>
      </Column>

      <Column fillWidth gap="32">
        {certificates.map((certificate) => (
          <Column key={certificate.title} fillWidth gap="m">
            <Row fillWidth horizontal="between" vertical="center">
              <Column flex={1} gap="4">
                <Heading as="h2" variant="heading-strong-l">
                  {certificate.title}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {certificate.issuer} · {certificate.date}
                </Text>
              </Column>
              <Tag>{certificate.category}</Tag>
            </Row>

            {certificate.image && (
              <Row
                fillWidth
                border="neutral-medium"
                radius="m"
                overflow="hidden"
              >
                <Media
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  aspectRatio="1,45 / 1"
                  width="100%"
                  enlarge
                />
              </Row>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  );
}
