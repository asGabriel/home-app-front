import { SignupForm } from "@/components/SignupForm/SignupForm";
import styles from "./page.module.css";
import { Col, Row } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Row style={{ height: "100vh" }}>
        <Col xs={0} sm={12} style={{ overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/sign_up.svg"
              alt="Imagem de login"
              objectFit="cover"
              width={600}
              height={600}
              objectPosition="center center"
              style={{ transform: "scale(0.9)" }}
            />
          </div>
        </Col>

        <Col
          xs={24}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <SignupForm />
        </Col>
      </Row>
    </main>
  );
}
