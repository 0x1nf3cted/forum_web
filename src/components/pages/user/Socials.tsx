import {
    IoSettingsSharp,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoTwitter,
  } from "react-icons/io5";

export default function Socials( props : any) {

    const Accounts: any = {
        "Twitter": <IoLogoTwitter size="24px"/>,
        "Github": <IoLogoGithub size="24px"/>,
        "LinkedIn": <IoLogoLinkedin size="24px"/>,
        "Instagram": <IoLogoLinkedin size="24px"/>
    }

    const socialAccounts = props?.socials?.map((acc: any )=> (
        <a href="https://github.com/ReallyCoolProjects" target="_blank">
            {Accounts[acc]}
        </a>
    ))

  return (
    <div className="socials flex flex-colomn justify-center items-center gap-x-3">
          {socialAccounts}
        </div>
  )
}
