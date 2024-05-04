import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Image src="/qr.png" alt="QR Code" width={1000} height={1000} />
    </div>
  );
}
