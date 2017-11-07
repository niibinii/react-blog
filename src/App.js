import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar"

let blogData = [
  {
    author: "Adwoa Doe",
    title: "Afforestation",
    icon: "tree",
    image: "/images/forest.jpeg",
    date: "November 2, 2017",
    text: "Actually gochujang vegan edison bulb portland. Hoodie keytar art party vegan. Adaptogen 8-bit wolf photo booth cliche viral vexillologist gochujang fixie vegan banh mi artisan brunch semiotics hella. Church-key mixtape knausgaard typewriter. Iceland put a bird on it iPhone raclette, franzen tattooed umami. Everyday carry post-ironic next level glossier. Lomo disrupt microdosing fashion axe, 3 wolf moon jean shorts pinterest. Cloud bread air plant pok pok ramps, hashtag semiotics  fund. Ethical "
  }, {
    author: "George Doe",
    title: "Recreation",
    icon: "gamepad",
    image: "/images/recreation.jpeg",
    date: "October 2, 2017",
    text: "Actually gochujang vegan edison bulb portland. Hoodie keytar art party vegan. Adaptogen 8-bit wolf photo booth cliche viral vexillologist gochujang fixie vegan banh mi artisan brunch semiotics hella. Church-key mixtape knausgaard typewriter. Iceland put a bird on it iPhone raclette, franzen tattooed umami. Everyday carry post-ironic next level glossier. Lomo disrupt microdosing fashion axe, 3 wolf moon jean shorts pinterest. Cloud bread air plant pok pok ramps, hashtag semiotics  "
  }, {
    author: "George Doe",
    title: "Education",
    icon: "graduation-cap",
    image: "/images/school.jpeg",
    date: "October 2, 2017",
    text: "Actually gochujang vegan edison bulb portland. Hoodie keytar art party vegan. Adaptogen 8-bit wolf photo booth cliche viral vexillologist gochujang fixie vegan banh mi artisan brunch semiotics hella. Church-key mixtape knausgaard typewriter. Iceland put a bird on it iPhone raclette, franzen tattooed umami. Everyday carry post-ironic next level glossier. Lomo disrupt microdosing fashion axe, 3 wolf moon jean shorts pinterest. Cloud bread air plant pok pok ramps, hashtag semiotics  "
  }
];

let navLinks = [
  {
    name: "About Teshie",
    local: "http://www.google.com"
  }, {
    name: "Contact",
    local: "http://www.google.com"
  }, {
    name: "About Teshie",
    local: "http://www.google.com"
  }
];

let socialLinks = [
  {
    iconName: "facebook",
    url: "https://facebook.com"
  },
  {
    iconName: "linkedin",
    url: "https://linkedin.com"
  },
  {
    iconName: "twitter",
    url: "https://twitter.com"
  },
  {
    iconName: "instagram",
    url: "https://instagram.com"
  },
]

class App extends React.Component {
  render() {

    return (
      <div>
        <Navbar brand="Teshie blog" links={navLinks}/>
        <Header/>
        <Blog data={blogData}/> {/* <Blog title="Recreation" icon="gamepad" author="James Sowah" date="March-1-2000" image="/images/recreation.jpeg"/>
        <Blog title="Education" icon="graduation-cap" author="Atswei Mary" date="Jan-1-2000" image="/images/school.jpeg"/>
        <Blog title="Water" icon="tint" author="Adjei Mark" date="Jan-1-2000" image="/images/water.jpg"/> */}
        <Footer social={socialLinks}/>
      </div>

    )
  }
}

export default App;
