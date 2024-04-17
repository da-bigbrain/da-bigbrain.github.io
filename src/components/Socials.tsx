import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Socials() {
  /*by the way here are some social links, in case you don't know */
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:h-[30rem] gap-5">
        <h1 className="text-4xl font-bold text-center">Socials</h1>
        <div className="flex border-2 gap-2 p-10 rounded-2xl bg-soft-white">
          <div className="flex flex-col gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#000000" }}
            />
            {/* <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#0070df" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              style={{ color: "#0070df" }}
            /> */}
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              style={{ color: "#ff049a" }}
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="2xl"
              style={{ color: "#ff0000" }}
            />
          </div>
          <div className="flex flex-col gap-4 mt-1">
            <Link
              href={"https://github.com/da-bigbrain"}
              className="text-blue-400"
              target="_blank"
            >
              /da-bigbrain
            </Link>
            {/* <Link
              href={"https://www.linkedin.com/in/enkhbold-g-b09a58142/"}
              className="text-blue-400"
              target="_blank"
            >
              /enkhbold-g-b09a58142
            </Link> */}

            {/* <Link
              href={"https://www.facebook.com/aab04e7d2522"}
              className="text-blue-400"
              target="_blank"
            >
              /aab04e7d2522
            </Link> */}
            <Link
              href={"https://www.instagram.com/deanzabigbrian/"}
              className="text-blue-400"
              target="_blank"
            >
              /da-bigbrain
            </Link>
            <Link
              href={"https://www.youtube.com/watch?v=xvFZjo5PgG0"}
              className="text-blue-400"
              target="_blank"
            >
              /da-bigbrain
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
