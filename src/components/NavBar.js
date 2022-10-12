import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aTags = links.map((link, index) => {
    return <a href={`#${link}`} key={index}>{link}</a>
  })

  return (
    <nav>
      {aTags}
    </nav>
  )

}

export default NavBar;
