import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS is Working!</h1>
      <p className="mt-4 text-gray-700">Welcome to your blog app using Next.js + Tailwind.</p>
    </main>
    </div>
  );
}