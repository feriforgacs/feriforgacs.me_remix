import Avatar from "~/components/Avatar";

export default function Home() {
  return (
    <>
      <Avatar />
      <div className="leading-loose flex flex-col gap-5 mb-10">
        <h1 className="text-3xl">
          <span role="img" aria-label="waving hand emoji">
            👋
          </span>{" "}
          Hey, it’s Feri!
        </h1>
        <p className="text-slate-500">
          <em>{"//"} pronounced like ferry</em>{" "}
          <span role="img" aria-label="smile emoji">
            😄
          </span>
        </p>

        <p>
          I’m a software engineer, indie developer, and lecturer with 15+ years
          of experience building digital products, leading development teams,
          and mentoring the next generation of web professionals. My career has
          been shaped by a passion for creating user-friendly, reliable, and
          scalable solutions for startups, agencies and international tech
          companies.
        </p>

        <p className="text-xl mt-10">Over the years, I’ve:</p>

        <ul className="list-disc list-inside space-y-10 ml-5">
          <li>
            built and launched micro-startups and freelance projects as an
            independent developer and designer, working end-to-end across the
            stack (React, React Native, Node.js, Express, TypeScript,
            TailwindCSS, Next.js, Remix, MongoDB, Docker).
          </li>
          <li>
            contributed as a Senior Software Engineer at Hotjar, integrating and
            enhancing real-time research tools using React, GraphQL, and Twilio
            APIs.
          </li>
          <li>
            focused on frontend engineering at PingPong, improving UI/UX and
            ensuring seamless video/chat integrations with React and Django.
          </li>
          <li>
            served as Head of Development at Be Social Hungary, managing a team
            to deliver applications, microsites, and CMS solutions for major
            brands like Coca-Cola, Media Markt, Nestlé, OTP Bank, Renault, and
            Xiaomi.
          </li>
          <li>
            worked as a freelancer and UI/UX designer for clients including
            Pepsi Hungary and Sopron Bank, gaining hands-on experience across
            the full project lifecycle.
          </li>
          <li>
            shared my knowledge as a lecturer at Edutus Egyetem, teaching web
            design and development with WordPress to students in online
            marketing programs.
          </li>
        </ul>

        <p>
          What drives me is the intersection of technology, product, and people.
          Solving complex problems through code, validating ideas in the market,
          or helping others grow their skills.
        </p>
      </div>
    </>
  );
}
