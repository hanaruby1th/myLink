"use client"; // This line marks the file as a client component

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    // Redirect after 1 second
    const timer = setTimeout(() => {
      const url = "https://www.onl2fa03.com/hanaruby1th";
      const readyUrl = url
        .replace("2", "y")
        .replace("0", "n")
        .replace("3", "s");

      window.location.href = readyUrl;
    }, 1642);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/logo.svg"
          alt="Animated SVG"
          width={150}
          height={150}
          className={styles.animatedImage}
        />
      </div>
    </div>
  );
}
