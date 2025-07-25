import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Blog
      </h1>
      <p className="text-lg text-gray-600">
        A full-stack blog built with Next.js, Tailwind CSS, and Node.js.
      </p>
    </main>
  );
}