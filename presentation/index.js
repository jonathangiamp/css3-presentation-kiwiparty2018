import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";
const notes = require("../data/note.json");
require("normalize.css");

const images = {
  go: require("../assets/go.gif"),
  grid: {
    css: require("../assets/screens/grid/css.jpg"),
    result: require("../assets/screens/grid/result.jpg")
  },
  calc: {
    css: require("../assets/screens/calc/css.jpg"),
    result: require("../assets/screens/calc/result.jpg")
  },
  var: {
    css: require("../assets/screens/var/css.jpg")
  },
  supports: {
    css: require("../assets/screens/supports/css.jpg")
  },
  insensitive: {
    css: require("../assets/screens/insensitive/css.jpg")
  },
  faster: require("../assets/faster.gif"),
  filter: {
    css: require("../assets/screens/filter/css.jpg")
  },
  snappoints: require("../assets/screens/snappoints/result.gif"),
  houdini: require("../assets/houdinistart.gif"),
  fireworks: require("../assets/fireworks.gif"),
  masonry: require("../assets/houdini/masonry.jpg"),
  tom: {
    old: require("../assets/houdini/TOM/old.jpg"),
    new: require("../assets/houdini/TOM/new.jpg")
  },
  paintapi: require("../assets/houdini/paintapi.jpg"),
  thanks: require("../assets/thanks.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#f6f6f6",
  secondary: "#22559c",
  tertiary: "#f27370",
  quarternary: "#ffdd7e",
  quinquennial: "#375a7f"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const formatNotes = (note) => {
  return (
    <ul>
      {
        note
          .map((str, key) => <li key={key} style={{ fontSize: "2rem", marginBottom: "25px" }}>{str}</li>)
      }
    </ul>
  );
};

// TODO:
// - Refractor

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" maxWidth={1400} margin="0 0">
          <Heading size={1} lineHeight={1} textColor="secondary" bold fontSize="9rem">
            Hello 🥝👋
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" maxWidth={1400} margin="0 0"
          notes={formatNotes(notes.slide1)}
        >
          <Heading size={3} lineHeight={1} textColor="secondary" bold>
            Jonathan Giamporcaro
          </Heading>
          <a target="_blank" href="https://twitter.com/JonGiamp">
            <Text margin="10px 0 0" textColor="secondary" size={3}>
            @jongiamp 🐦
            </Text>
          </a>
          <Text margin="30px 0 0" textColor="tertiary" size={4}>
            Développeur web
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary" bgDarken={0.3} maxWidth={1400} margin="0 0" align="center center"
          notes={formatNotes(notes.slide2)}
        >
          <Appear order={2} transitionDuration={1000} >
            <Heading
              size={2}
              lineHeight={1}
              textColor="primary"
              bold
              textAlign="left"
            >
              <span style={{ color: "#f27370" }}>CSS3+</span>
            , une plongée dans le futur 🚀
            </Heading>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" maxWidth={1400}
          notes={formatNotes(notes.slide3)}
        >
          <a target="_blank" href="https://www.w3.org/Consortium/">
            <Heading textSize="9rem" textColor="secondary" caps bold fill>W3C</Heading>
          </a>
          <BlockQuote>
            <Quote>Un seul web partout et pour tous</Quote>
          </BlockQuote>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" margin="0 0" maxWidth={1400} maxHeight={1400}
          notes={formatNotes(notes.slide4)}
        >
          <a target="_blank" href="https://www.w3.org/Consortium/">
            <Heading textSize="9rem" textColor="secondary" caps bold fill>W3C</Heading>
          </a>
          <List>
            <Appear><ListItem margin="10px 0 0" textSize="2.3rem" textColor="primary">Fondé par Tim Berners-Lee en 1994</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="2.3rem" textColor="primary">Organisme de standardisation à but non lucratif</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="2.3rem" textColor="primary">Publie les standards CSS</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="2.3rem" textColor="primary">Consortium international d'entreprises</ListItem></Appear>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide5)}
        >
          <Heading textSize="9rem" textColor="secondary" caps bold fill>W3C</Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Processus de recommandations 📝
          </Text>
          <List ordered>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Working Draft (WD)</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Candidate Recommendation</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Proposed Recommendation</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">W3C Recommendation</ListItem></Appear>
          </List>
        </Slide>


        <Slide transition={["zoom"]} bgImage={images.go} bgDarken={0.2} margin="-80 0 0"
          notes={formatNotes(notes.slide6)}
        />


        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/fr-FR/docs/Web/CSS/CSS_Grid_Layout">
            <Heading textSize="8rem" textColor="tertiary" caps bold fill>Grid Layout</Heading>
          </a>
          <Text margin="30px 0 0" textColor="secondary" textSize="3rem" textAlign="left">
            Permet de créer des mises en page en divisant l'espace d'affichage en régions utilisables
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400} maxHeight={3000}>
          <Heading textSize="8rem" textColor="tertiary" caps bold fill>Grid Layout</Heading>
          <Image src={images.grid.css}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400} maxHeight={3000}>
          <Heading textSize="8rem" textColor="tertiary" caps bold fill>Grid Layout</Heading>
          <Image src={images.grid.result} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary"
          notes={formatNotes(notes.slide10)}
        >
          <BlockQuote>
            <Quote>Grid Layout, c'est de la frappe 👌</Quote>
            <Cite>Moi même</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400} maxHeight={3000}>
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/repeat">
            <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 40px">repeat() & fr</Heading>
          </a>
          <Image src={images.calc.css}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400} maxHeight={3000}
          notes={formatNotes(notes.slide12)}
        >
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 40px">repeat() & fr</Heading>
          <Image src={images.calc.result} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide13)}
        >
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/Les_variables_CSS">
            <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 40px">Variable CSS</Heading>
          </a>
          <Image src={images.var.css}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide14)}
        >
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/@supports">
            <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 40px">@supports</Heading>
          </a>
          <Image src={images.supports.css}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors#case-insensitive">
            <Heading textSize="5.5rem" textColor="tertiary" bold fill margin="0 0 40px">Sélecteurs d'attribut i</Heading>
          </a>
          <Image src={images.insensitive.css}/>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.faster} bgDarken={0.2} maxWidth={1400}
          notes={formatNotes(notes.slide16)}
        />

        <Slide transition={["fade"]} bgColor="tertiary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide17)}
        >
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/filter#Browser_compatibility">
            <Heading textSize="6rem" textColor="secondary" bold fill margin="0 0 40px">filter()</Heading>
          </a>
          <Image src={images.filter.css}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide18)}
        >
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Scroll_Snap_Points">
            <Heading textSize="5.5rem" textColor="secondary" bold fill margin="0 0 40px">Scroll Snap Points</Heading>
          </a>
          <Image src={images.snappoints} height={400} width={600} />
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide19)}
        >
          <a target="_blank" href="https://www.w3.org/TR/selectors-4/">
            <Heading textSize="3rem" textColor="primary" caps bold fill>
          sélecteur
              <span style={{ color: "#f27370" }}>:pseudo-classe</span>
            </Heading>
          </a>
          <Text margin="10px 0 0" textColor="secondary" size={3} style={{ color: "#f6f6f6" }}>
            Niveau 4
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Indique l'<span style={{ color: "#f27370" }}>état</span> spécifique dans lequel l'élément doit être pour être ciblé par la déclaration
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/:has">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 5px">
          elem<span style={{ color: "#f44336" }}>:has</span>(> elem)
            </Heading>
          </a>
          <Text margin="0 0 5px" textColor="quarternary" textSize="2.5rem">
            section:has(.classA .classB)
          </Text>
          <Text margin="0 0 40px" textColor="quarternary" textSize="2.5rem">
            .header:has(+ span)
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible un élément si au moins un des sélecteurs passés en paramètre correspond à l'élément
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:dir">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
          elem<span style={{ color: "#E91E63" }}>:dir</span>(rtl)
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible un élément selon la direction du texte qu'il contient
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/:any-link">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
          elem<span style={{ color: "#00BCD4" }}>:any-link</span>
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible les éléments a, area ou link avec un attribut href
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide23)}
        >
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/:default">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
            elem<span style={{ color: "#009688" }}>:default</span>
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible l'élément par défaut d'un groupe
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide24)}
        >
          <a target="_blank" href="https://developer.mozilla.org/fr-FR/docs/Web/CSS/:in-range">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 5px">
            elem<span style={{ color: "#4CAF50" }}>:in-range</span>
            </Heading>
          </a>
          <a target="_blank" href="https://developer.mozilla.org/fr-FR/docs/Web/CSS/:out-of-range">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
            elem<span style={{ color: "#4CAF50" }}>:out-of-range</span>
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible un élément lorsque la valeur est en dehors de l'intervalle autorisé
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS/:placeholder-shown">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
            elem<span style={{ color: "#FF9800" }}>:placeholder-shown</span>
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible les éléments affichant un texte de substitution
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://www.w3.org/TR/selectors-4/#time-pseudos">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 5px">
            elem<span style={{ color: "#FF5722" }}>:past</span>
            </Heading>
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 5px">
            elem<span style={{ color: "#FF5722" }}>:current</span>
            </Heading>
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 40px">
            elem<span style={{ color: "#FF5722" }}>:future</span>
            </Heading>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible des éléments dans une chronologie (Lecteur d'écran, sous-titres...)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="quinquennial" margin="0 0" maxWidth={1400}>
          <a target="_blank" href="https://www.w3.org/TR/selectors-4/#child-index">
            <Heading textSize="3rem" textColor="primary" bold fill margin="0 0 5px">
            elem:nth-child(An+B <span style={{ color: "#CDDC39" }}>of Selector</span>)
            </Heading>
          </a>
          <Text margin="0 0 40px" textColor="quarternary" textSize="2.5rem">
            elem:nth-child(even of :not([hidden]))
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Cible des éléments fils suivant une condition
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgImage={images.houdini} bgDarken={0.2} maxWidth={1400}
          notes={formatNotes(notes.slide28)}
        />

        <Slide transition={["fade"]} bgColor="tertiary" maxWidth={1400} bgImage={images.fireworks} bgDarken={0.3}>
          <a target="_blank" href="https://developers.google.com/web/updates/2016/05/houdini">
            <Heading textSize="6rem" textColor="tertiary" caps bold fill margin="0 0 40">Projet Houdini</Heading>
          </a>
          <BlockQuote>
            <Quote>Hack le moteur de rendu CSS</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide30)}
        >
          <a target="_blank" href="https://developers.google.com/web/updates/2016/05/houdini">
            <Heading textSize="9rem" textColor="tertiary" caps bold fill>Houdini</Heading>
          </a>
          <List>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Composé de Mozilla, Apple, Opera, Microsoft, HP, Intel et Google</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Travaillent à exposer certaines parties du moteur CSS aux développeurs</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Collection de brouillons dans le but de les faire accepter par le W3C</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide31)}
        >
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <a target="_blank" href="https://developers.google.com/web/updates/2016/05/houdini#layout_worklet">
            <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Layout API
            </Text>
          </a>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Permet aux développeurs de créer leurs propres algorithmes de mise en pages
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide32)}
        >
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Projet Houdini
          </Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Layout API
          </Text>
          <Text margin="5px 0 0" textColor="primary" textSize="2.5rem">
            display: masonry;
          </Text>
          <Image src={images.masonry}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}>
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Typed Object Model
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Interface javascript, avec types et méthodes, permettant de manipuler le CSS
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}>
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <a target="_blank" href="https://developers.google.com/web/updates/2018/03/cssom">
            <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Typed Object Model
            </Text>
          </a>
          <Image src={images.tom.old}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide35)}
        >
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Typed Object Model
          </Text>
          <Image src={images.tom.new}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}>
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Paint API
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize="3rem" textAlign="left" size={4}>
            Permet de générer, en JS, une image à chaque fois qu'une propriété CSS attend une image (background-image, border-image...)
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}>
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <Text margin="5px 0 0" textColor="quarternary" textSize="2.5rem">
            Paint API
          </Text>
          <a target="_blank" href="https://googlechromelabs.github.io/houdini-samples/paint-worklet/checkerboard/" target="_blank">
            <Image src={images.paintapi}/>
          </a>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" margin="0 0" maxWidth={1400}
          notes={formatNotes(notes.slide38)}
        >
          <Heading textSize="6rem" textColor="tertiary" bold fill margin="0 0 10px">
          Houdini
          </Heading>
          <Text textColor="quarternary" textSize="2.5rem">
            Et d'autres...
          </Text>
          <List>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Parser API </ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">AnimationWorklet</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">Font Metrics API</ListItem></Appear>
            <Appear><ListItem margin="10px 0 0" textSize="3rem" textColor="primary">...</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgDarken={0.3} bgImage={images.thanks} margin="0 0" maxWidth={1400} align="center flex-end">
          <Heading textSize="9rem" textColor="primary" bold fill margin="0 0 10px">
            Merci. 💙
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
