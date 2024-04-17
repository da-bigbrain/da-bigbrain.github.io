This is my portfolio page README for my GitHub repository.

<p
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dct="http://purl.org/dc/terms/"
>
  <a
    property="dct:title"
    rel="cc:attributionURL"
    href="https://github.com/enkhbold470/my-next-portfolio"
    >Portfolio Website</a
  >
  by <span property="cc:attributionName">Enkhbold Ganbold</span> is licensed
  under
  <a
    href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
    target="_blank"
    rel="license noopener noreferrer"
    style="display: inline-block"
    >Attribution-NonCommercial-NoDerivatives 4.0 International<img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
  /></a>
</p>

## Getting Started

To run the portfolio locally, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker Container

if you're running it on server, make sure containers run even though it is restarted, in order to do that, use this script:

`docker run -d -p 80:3000 --restart unless-stopped enkhbold470/enk.icu-arm`

### Make sure when server boot, triggers docker.service, script:

`sudo systemctl enable docker.service`

`sudo systemctl enable containerd.service`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<p
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dct="http://purl.org/dc/terms/"
>
  <a
    property="dct:title"
    rel="cc:attributionURL"
    href="https://github.com/enkhbold470/my-next-portfolio"
    >Portfolio Website</a
  >
  by <span property="cc:attributionName">Enkhbold Ganbold</span> is licensed
  under
  <a
    href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
    target="_blank"
    rel="license noopener noreferrer"
    style="display: inline-block"
    >Attribution-NonCommercial-NoDerivatives 4.0 International<img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" /><img
      style="
        height: 22px !important;
        margin-left: 3px;
        vertical-align: text-bottom;
      "
      src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
  /></a>
</p>
