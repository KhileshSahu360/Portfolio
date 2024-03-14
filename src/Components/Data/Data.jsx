import { createContext, useState } from "react"
import { useContext } from "react";
const gradientBtn = {
    /* font-size: .5rem */
    boxSizing: "border-box",
    fontSize: ".6rem",
    padding: ".8rem 2.2rem",
    borderRadius: "3px",
    border: "none",
    color: "white",
    cursor: "pointer",
    backgroundImage: "linear-gradient(15deg, hsl(327deg 98% 45%) 0%, hsl(321deg 100% 42%) 15%, hsl(315deg 100% 38%) 26%, hsl(305deg 100% 34%) 40%, hsl(292deg 100% 33%) 60%, hsl(277deg 87% 36%) 100%)"
}
const waterBtn = {
  boxSizing: "border-box",
  boxShadow: "-2px -2px 10px 0px rgb(255, 255, 255),3px 2px 10px -3px rgba(0, 0, 0, 0.5)",
  fontSize: ".6rem",
  padding: ".8rem 2.2rem",
  borderRadius: "3px",
  border: "none",
  color: "#08203a",
  cursor: "pointer",
  backgroundImage: "linear-gradient(120deg,hsl(220deg 60% 99%) 0%,hsl(219deg 58% 99%) 13%,hsl(219deg 58% 98%) 24%,hsl(218deg 57% 98%) 34%,hsl(218deg 57% 98%) 42%,hsl(217deg 56% 98%) 49%,hsl(217deg 56% 97%) 56%,hsl(216deg 56% 97%) 61%,hsl(216deg 56% 97%) 66%,hsl(215deg 56% 96%) 71%,hsl(215deg 56% 96%) 75%,hsl(214deg 56% 96%) 79%,hsl(214deg 56% 96%) 83%,hsl(213deg 56% 95%) 86%,hsl(213deg 56% 95%) 88%,hsl(212deg 56% 95%) 91%,hsl(212deg 56% 94%) 93%,hsl(211deg 56% 94%) 95%,hsl(211deg 56% 94%) 97%,hsl(210deg 56% 93%) 99%,hsl(210deg 56% 93%) 100%)"
}

const ButtonContext = createContext();
export const useData = () => useContext(ButtonContext);
const ButtonData = ({children}) =>{
  const [data,setData] = useState({
    gradientBtn,
    waterBtn
  });
  return(
    <>
      <ButtonContext.Provider value={{data,setData}}>
        {children}
      </ButtonContext.Provider>
    </>
  )
}
export default ButtonData;
// export {useData};