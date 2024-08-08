import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>About</h1>

      <Link href={'/'}>Home</Link>

      <Image
      src={'/next.svg'}
      alt="Usama"
      width={100}
      height={100} />
    </>
  );
}