export const d1 = [
    {
      isMod: false,
      lineIndex: 0,
      modifiedLine: "<h2>Welcome to our site!</h2>",
      originalLine: "<h2>Welcome to our site!</h2>",
      reason: ""
    },
    {
      isMod: false,
      lineIndex: 1,
      modifiedLine: "<p>Click on the links below to check things out</p>",
      originalLine: "<p>Click on the links below to check things out</p>",
      reason: ""
    },
    {
      isMod: true,
      lineIndex: 2,
      modifiedLine: `<a href="https://www.w3schools.com" aria-label="Link to W3Schools website">See Documentation</a>`,
      originalLine: "<a href=\"https://www.w3schools.com\">See Documentation</a> ",
      reason: "The accessibility modification was necessary to provide a descriptive label for the link that is read out by screen readers, making it clear to users with visual impairments where the link will take them."

    },
  ]

  export const d2 = [
    {
        isMod: false,
        lineIndex: 0,
        modifiedLine: "function App() {",
        originalLine: "function App() {",
        reason: ""
    },
    {
        isMod: false,
        lineIndex: 1,
        modifiedLine: "  return (",
        originalLine: "  return (",
        reason: ""
    },
    {
        isMod: false,
        lineIndex: 2,
        modifiedLine: "    <div>",
        originalLine: "    <div>",
        reason: ""
    },
    {
        isMod: false,
        lineIndex: 3,
        modifiedLine: "      <h1>Caring for a Cat</h1>",
        originalLine: "      <h1>Caring for a Cat</h1>",
        reason: ""
    },
    {
        isMod: true,
        lineIndex: 4,
        modifiedLine: `      <img src="https://m.media-amazon.com/images/I/61LsnH5NpzL.jpg" alt="Cat scratches post" />`,
        originalLine: `      <img src="https://m.media-amazon.com/images/I/61LsnH5NpzL.jpg" />`,
        reason: `The accessibility modification was necessary to provide a text alternative for the image which describes the content of the images and makes it accessible to users who rely on screen readers or have images disabled.`
    },
    {
        isMod: false,
        lineIndex: 5,
        modifiedLine: "    </div>",
        originalLine: "    </div>",
        reason: ""
    },
    {
        isMod: false,
        lineIndex: 6,
        modifiedLine: "  );}",
        originalLine: "  );}",
        reason: ""
    },
  ]


  export const d3 = [
    {
        isMod: true,
        lineIndex: 0,
        modifiedLine: `<header>`,
        originalLine: `<div class="header">`,
        reason: "The <header> element is specifically designed to represent introductory content at the beginning of a section or page. By using <header> instead of a generic <div>, we convey to both browsers and assistive technologies that the content within this element is significant for understanding the structure of the page."
    },
    {
        isMod: true,
        lineIndex: 1,
        modifiedLine: `   <nav>`,
        originalLine: `<div class="navigation">`,
        reason: "The <nav> element is semantically intended to represent a section of a page that contains navigation links. By using <nav> instead of a generic <div>, we convey to both browsers and assistive technologies that the content within this element serves a navigational purpose, making the structure of the webpage more meaningful."
    },
    {
        isMod: false,
        lineIndex: 2,
        modifiedLine: "<p>Content</p>",
        originalLine: "<p>Content</p>",
        reason: ""
    },
    {
        isMod: true,
        lineIndex: 3,
        modifiedLine: "</nav>",
        originalLine: "</div>",
        reason: "Closing tag for semantic HTML modification"
    },
    {
        isMod: true,
        lineIndex: 4,
        modifiedLine: "</header>",
        originalLine: "</div>",
        reason: "Closing tag for semantic HTML modification"
    },
  ]