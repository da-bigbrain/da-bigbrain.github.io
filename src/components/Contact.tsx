import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="join"
      className="flex flex-col items-center justify-center py-10 my-10 lg:h-[20rem]"
    >
      <div className="justify-center text-3xl py-10 font-semibold capitalize">
        Join Our Club!
      </div>
      {/* <div className="animate-bounce">
        <Link
          href="https://discord.gg/BCPDcsHD4d"
          target="_blank"
          className="text-blue-500 text-xl lg:text-2xl"
        >
          https://discord.gg/BCPDcsHD4d
        </Link>
      </div> */}
      <div className="text-body-color dark:text-dark-6 hover:border-gray-900 hover:bg-gray-300 inline-block rounded-full border-2 dark:border-dark-3 py-[10px] px-7 text-xl font-medium transition hover:text-gray-900 mt-5">
        <Link href={"https://discord.gg/k7EUmkGpK"} target="_blank">
          Join
        </Link>
      </div>

      <h1 className="text-xl py-5 lg:w-[50%] my-5 px-10 mx-5 text-center">
        We are the Neuroscience Club at De Anza College, conducting research on
        electroencephalograms (EEG) to enhance accessibility for disabled
        individuals, such as driving a car using brain waves, among other
        applications.
      </h1>
    </div>
  );
}
