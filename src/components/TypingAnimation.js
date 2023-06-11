import TypeWriter from "typewriter-effect/dist/core";

const textTyped = [
  "The heart to want change, ",
  "the skills to make it happen.",
];

const styledText = [
  `The <span style="color: #ef4444"><b>heart &#10084;</b></span> to want change,`,
  `the <span style="color: #f0abfc"><b>skills &#129504;</b></span> to make it happen.`,
];
/**
 * delay is the time waiting for animation to start
 * typeDur is the time taken to type the text
 * deleteDur is the time taken to delete the text
 * hiddenDur is the period where no text is shown
 * shownDur is the period where the text is shown
 */
export default function TypingAnimation() {
  var typewriter = new TypeWriter(document.getElementById("textArea"), {
    loop: true,
    delay: 75,
  });
  typewriter
    .pauseFor(1000)
    .typeString(styledText[0])
    .pauseFor(500)
    .deleteChars(textTyped[0].length + 2)
    .typeString(styledText[1])
    .pauseFor(1500)
    .start();
}
