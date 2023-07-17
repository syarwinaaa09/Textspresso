import { Circle } from "better-react-spinkit";

import LogoImage from "./textspresso-high-resolution-logo-color-on-transparent-background.png";

function Loading() {
  return (
    <div>
      <center style={{ display: "grid", placeItems: "center", height: "100vh"}}>
        <div>
            <img src={LogoImage} 
            alt="" 
            style= {{ marginBottom: 10 }}
            height={200}
        />
        <Circle color="#3CBC28" size={60}/>
        </div>
      </center>
    </div>
  )
}

export default Loading
