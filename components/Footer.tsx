import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const SOCIALS: SocialProps[] = [
  {
    name: "Twitter",
    icon: <Twitter />,
    url: "https://twitter.com/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    url: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/",
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="px-5 py-3 flex justify-between items-center border-t">
        <p className="text-lg">
          &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((social: SocialProps) => (
            <Link key={social.name} href={social.url} target="_blank">
              <Button size={"icon"}>{social.icon}</Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
