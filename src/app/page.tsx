import { SignupForm } from "@/components/SignupForm/SignupForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SignupForm />
    </main>
  );
}
