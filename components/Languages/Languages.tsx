"use client"
import { ArrowDown } from "@/assets/icons";
import useToggle from "@/hooks/useToggle";

const Languages = () => {
  const { open, toggle } = useToggle();

  const languageListStyle = {
    display: open ? "flex" : "none"
  }

  return (
    <div id="language-bar" aria-labelledby="languages">
      <div className="languages">
        <button 
          id="current-language" 
          className="language" onClick={() => toggle()}>
          Русский <span className={open ? "arrow up" : "arrow"}><ArrowDown /></span>
        </button>
        <div className="language-list" style={languageListStyle}>
          <Language>Türkmen</Language>
        </div>
      </div>
    </div>
  )
};

const Language = ({ children }: { children: React.ReactNode }) => {
  return <button type="button" className="language other">{children}</button>
};

export default Languages;