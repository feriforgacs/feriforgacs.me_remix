import ProjectCard from "~/components/ProjectCard";
import { Link } from "react-router";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <h1 className="text-3xl mt-10 mb-5">Projects</h1>
      <h2 className="text-xl mb-10">
        Projects I've worked on in the past couple of years
      </h2>

      <ProjectCard
        projectName="Gift Calendar for Shopify"
        projectURL="https://giftcalendarapp.com/"
        projectImage="gift-calendar/icon.png"
        projectDateOfLaunch="2025. 09."
        projectStatus="🟢 Active"
      >
        <p>
          Boost (not just) holiday sales with an interactive advent-style
          calendar. Surprise and reward shoppers with daily gifts, exclusive
          offers, and product reveals—keeping them excited to come back every
          day and boosting your holiday sales, no coding needed.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>React</li>
          <li>Remix</li>
          <li>Prisma</li>
          <li>Shopify Polaris</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="Exploding Discounts for Shopify"
        projectURL="https://explodingdiscounts.com/"
        projectImage="exploding-discounts/icon.png"
        projectDateOfLaunch="2025. 07."
        projectStatus="🟢 Active"
      >
        <p>
          Drive urgency and boost sales with unique flash discount codes.
          Convert more visitors into customers by offering a unique discount
          code that expires within minutes. Leverage the power of time-limited
          offers, drive instant action and maximize your sales potential. All
          without coding.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>React</li>
          <li>Remix</li>
          <li>Prisma</li>
          <li>Shopify Polaris</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="Gyerekprogi"
        projectURL="https://gyerekprogi.com"
        projectImage="gyerekprogi/icon.png"
        projectDateOfLaunch="2024. 05."
        projectStatus="🟢 Active"
      >
        <p>
          Gyerekprogi is a platform that helps parents find the best events and
          programs for their kids and families.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>React</li>
          <li>Remix</li>
          <li>Prisma</li>
          <li>Shopify Polaris</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="TWiS 2.0"
        projectURL=""
        projectImage="twis2/twis-logo.png"
        projectDateOfLaunch="2022. 01."
        projectStatus="☠️ Shut down"
      >
        <p>Grow your database with story-like experiences</p>
        <p>
          Twis helps you create experiences that are more in line with the story
          format so you can grow your database in a fun and more engaging way.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>Next.js</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>

        <p>🐙 Source code is available on GitHub:</p>

        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>
            <a
              href="https://github.com/feriforgacs/twis-io"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              twis.io marketing site
            </a>
          </li>
          <li>
            <a
              href="https://github.com/feriforgacs/app-twis-io"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              app.twis.io
            </a>
          </li>
          <li>
            <a
              href="https://github.com/feriforgacs/go-twis-io"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              go.twis.io
            </a>
          </li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="Smart Notification Bar"
        projectURL="https://smartnotificationbar.com/"
        projectImage="smartnotificationbar/smartnotificationbar.gif"
        projectDateOfLaunch="2020.06."
        projectStatus="💰 Acquired"
      >
        <p>
          Smart Notification Bar can help you to easily target your visitors
          with the best message to drive more sales and grow engagement.
        </p>
        <p>
          Display a message to visitors who came from Facebook, Google, an email
          campaign, an ad campaign, and much more.
        </p>
        <p>
          <strong>The project has been acquired in 2022.</strong>
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <a
          href="https://wordpress.org/plugins/smart-notification-bar/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500 hover:underline"
        >
          Get the WordPress plugin
        </a>
      </ProjectCard>

      <ProjectCard
        projectName="The Maker Report"
        projectURL="https://the-maker-report.netlify.app/"
        projectImage="makerreport/makerreport.gif"
        projectDateOfLaunch="2020.02."
        projectStatus="🧟 Zombie"
      >
        <p>
          The Maker Report conducts a survey every year to learn more about the
          maker community. The first study was completed by the beginning of
          2020 and gives a snapshot of their year 2019.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="Discount Hunt for Shopify"
        projectURL="https://discounthuntapp.com/"
        projectImage="discounthunt/discounthunt-icon.png"
        projectDateOfLaunch="2019.10."
        projectStatus="💰 Acquired"
      >
        <p>
          With the help of Discount Hunt you can drive more traffic to your
          Shopify store, increase the time visitors spend on your site, grow the
          database of your potential customers and drive more sales.
        </p>
        <p>
          <strong>The project has been acquired in 2024.</strong>
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>CSS</li>
          <li>MongoDB</li>
          <li>Shopify Polaris</li>
        </ul>
        <Link
          to="/2019/10/30/my-first-shopify-extension"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
      </ProjectCard>

      <ProjectCard
        projectName="Gift Hunt for WordPress"
        projectURL="https://gifthuntplugin.com/"
        projectImage="gifthunt/gifthunt-icon.gif"
        projectDateOfLaunch="2019.10."
        projectStatus="💰 Acquired"
      >
        <p>Online Treasure Hunt on your WordPress site.</p>
        <p>
          <strong>The project has been acquired in 2022.</strong>
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <a
          href="https://wordpress.org/plugins/gift-hunt/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500 hover:underline"
        >
          Get the WordPress plugin
        </a>
      </ProjectCard>

      <ProjectCard
        projectName="Re-Product"
        projectImage="reproduct/re-product-icon.png"
        projectDateOfLaunch="2019.08."
        projectStatus="☠️ Shut down"
      >
        <p>
          Re-Product is an online market where you can trade with your used or
          new stuff without involving real money to the process.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>pug</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <p>🐙 Source code is available on GitHub:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>
            <a
              href="https://github.com/feriforgacs/fixathon"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              Re-Product source code
            </a>
          </li>
        </ul>

        <Link
          to="/2019/09/05/re-product-an-online-market-for-your-trash"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
      </ProjectCard>

      <ProjectCard
        projectName="Maker Goals Menubar"
        projectURL="https://makergoals.netlify.app/"
        projectImage="maker-goals-menubar/maker_goals_menubar_icon.gif"
        projectDateOfLaunch="2019.06."
        projectStatus="🧟 Zombie"
      >
        <p>
          With the help of Maker Goals Menubar, you can easily manage your goals
          on Product Hunt from the menubar of your Mac.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>React</li>
          <li>Electron</li>
          <li>GraphQL</li>
          <li>CSS</li>
        </ul>
        <Link
          to="/2019/06/17/my-first-desktop-application"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
      </ProjectCard>

      <ProjectCard
        projectName="Story View for WordPress"
        projectURL="https://storyviewplugin.com/"
        projectImage="storyview/storyview-icon.gif"
        projectDateOfLaunch="2019.05."
        projectStatus="☠️ Shutdown"
      >
        <p>
          Story View is a WordPress plugin that you can use to create story-like
          versions of your posts.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <Link
          to="/2019/06/14/from-avengers-endgame-to-my-first-successful-product"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
        <p>🐙 Source code is available on GitHub:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>
            <a
              href="https://github.com/feriforgacs/storyview"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              Story View source code
            </a>
          </li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="TWiS - The winner is"
        projectURL="https://twis.io/"
        projectImage="twis/twis-icon.gif"
        projectDateOfLaunch="2019.05."
        projectStatus="☠️ Shutdown"
      >
        <p>
          You can use TWiS.io to select random winners from Instagram comments
          or mentions in your Business profiles.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP (CodeIgniter)</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <Link
          to="/2019/05/14/and-the-winner-is"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
        <p>🐙 Source code is available on GitHub:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>
            <a
              href="https://github.com/feriforgacs/instagram-winner-picker"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              TWiS source code
            </a>
          </li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="CreativeDEVjobs"
        projectImage="creativedevjobs/creativedevjobs-thumbnail.png"
        projectDateOfLaunch="2019.05."
        projectStatus="☠️ Shutdown"
      >
        <p>
          CretiveDEVjobs came to life to become the number one job listing site
          for developers with a creative mind.
        </p>
        <p>
          I believe that there are a huge amount of developers who like to use
          not just the algorithmical but also the creative part of their brain.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP (CodeIgniter)</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <Link
          to="/2019/05/09/a-special-kind-of-developer-the-creative-one"
          className="text-green-500 hover:underline"
        >
          Learn more about the project
        </Link>
      </ProjectCard>

      <ProjectCard
        projectName="Quizy"
        projectImage="quizy/quizy.png"
        projectDateOfLaunch="never"
        projectStatus="☠️ Shutdown"
      >
        <p>
          With Quizy, you can create small quizzes (1 question 3 answer) in a
          few minutes. The answers are stored in a Google Sheet so you can
          manage them easily.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>PHP (CodeIgniter)</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        projectName="HashtagCalendar"
        projectImage="hashtagcalendar/hashtagcalendar-icon.gif"
        projectDateOfLaunch="2019.01."
        projectStatus="☠️ Shutdown"
        projectURL="https://hashtagcalendar.netlify.app/"
      >
        <p>
          The main purpose of HashtagCalendar is to provide some inspiration for
          small businesses or individuals when they want to create some content
          on Instagram but have no idea what that should be about.
        </p>
        <p>
          HashtagCalendar provides daily and holiday hashtag suggestions with a
          short description and other suggested hashtags.
        </p>
        <p>🛠️ Built with:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
        <p>🐙 Source code is available on GitHub:</p>
        <ul className="list-disc space-y-1 list-inside ml-5">
          <li>
            <a
              href="https://github.com/feriforgacs/hashtagcalendar"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline"
            >
              HashtagCalendar source code
            </a>
          </li>
        </ul>
      </ProjectCard>
    </>
  );
}
