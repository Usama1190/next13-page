import Link from "next/link";
import Image from "next/image";

export default function Home({params}: { params: { products: string } }) {
  return (
    <>
      <h1>Dynamic Route</h1>

      <Link href={'/'}>Home Page</Link>

      <Image
      src={'/next.svg'}
      alt="Usama"
      width={100}
      height={100} />
      <div>The product name is: {params.products}</div>
    </>
  );
}