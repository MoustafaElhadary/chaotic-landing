import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactConfirmationEmailProps {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const ContactConfirmationEmail = ({
  name,
  email,
  company,
  message,
}: ContactConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting Chaotic</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Contact Confirmation</Heading>
        <Text style={text}>
          Thank you for contacting Chaotic, {name}. We have received your
          message and will get back to you shortly.
        </Text>
        <Text style={text}>Here&apos;s a summary of your submission:</Text>
        <Text style={text}>
          <strong>Name:</strong> {name}
          <br />
          <strong>Email:</strong> {email}
          <br />
          <strong>Company:</strong> {company}
          <br />
          <strong>Message:</strong> {message}
        </Text>
        <Text style={text}>
          If you have any additional questions, please don&apos;t hesitate to
          reach out.
        </Text>
        <Text style={text}>
          Best regards,
          <br />
          The Chaotic Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "17px 0 0",
  margin: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};
