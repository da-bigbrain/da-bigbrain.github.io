import Image from "next/image";
export default function Home() {
  return (
    <div className="flex justify-center">
      <Image
        className="w-6/12 p-5"
        width={500}
        height={500}
        src="/qr.png"
        alt="QR Code"
      />
    </div>
  );
}
