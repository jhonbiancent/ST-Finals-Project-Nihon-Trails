import React from 'react'
import loginStyle from "./LogInPage.module.css";
import Link from "next/link";
const navbar = () => {
  return (
     <div className={loginStyle.navigationContainer}>
              <Link href={"./Home"} ><img src="/ASSETS/WEBSITE-TITLE.png" className={loginStyle.websiteTitle}/></Link>
          <nav className={loginStyle.navigationBar}>
                <Link href={"/DISCOVER"} className={loginStyle.navLinks}>Discover</Link>
                <Link href="/users" className={loginStyle.navLinks}>Bucketlist</Link>
                <a className={loginStyle.navLinks} href="#">Users</a>
            <div id="nightmodeContainer">
              <img src="/ASSETS/ICONS-SUN.png" className={loginStyle.iconsSun} />
                  <div className={loginStyle.toggleCircle} id="toggleButton">
                    .
                  </div>
               <img src="/ASSETS/ICONS-MOON.png" className={loginStyle.iconsMoon}/>
              </div>
             </nav>
    </div>
  )
}

export default navbar
