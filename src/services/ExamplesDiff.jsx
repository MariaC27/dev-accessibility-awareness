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