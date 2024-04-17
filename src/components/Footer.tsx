export default function Footer() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-700 h-min">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex flex-row max-sm:flex-col-reverse">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy;2024 De Anza BigBrain Club. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium underline text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#Timeline" className="hover:underline me-4 md:me-6">
                Work
              </a>
            </li> */}
            <li>
              <a href="/projects" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="/#join" className="hover:underline me-4 md:me-6">
                Join
              </a>
            </li>
            {/* <li>
              <a href="/resume" className="hover:underline me-4 md:me-6">
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
