import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="join"
      className="flex flex-col items-center justify-center py-6 lg:h-[20rem]"
    >
      <div className="justify-center text-3xl py-4 font-semibold capitalize">
        Join Discord & Let&apos;s talk!
      </div>
      <div className="animate-bounce">
        <Link
          href="https://discord.gg/BCPDcsHD4d"
          target="_blank"
          className="text-blue-500 text-2xl"
        >
          https://discord.gg/BCPDcsHD4d
        </Link>
      </div>
      <div>
        {/* <div className="text-body-color dark:text-dark-6 hover:border-gray-900 hover:bg-gray-300 inline-block rounded-full border-2 dark:border-dark-3 py-[10px] px-7 text-xl font-medium transition hover:text-gray-900 mt-5">
          <Link href={"/resume"} target="_blank">
            Download Résumé
          </Link>
        </div> */}
      </div>
    </div>
  );
}
