import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page : string,
    selectedPage :SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page,selectedPage,setSelectedPage}: Props) => {
    // when i write id="myhome" the replace / /g , "" will remove any space between it example (my home) this wrong and the replace (myhome)
    const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500": ""} transition duration-500 hover:text-primary-300 `}
        href={`#${lowerCasePage}`}
        onClick={()=>setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link