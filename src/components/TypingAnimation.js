import Typewriter from "typewriter-effect";

const textTyped = [
  "The heart to want change, ",
  "the skills to make it happen.",
];

const styledText = [
  `<span style="font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 20px; color: white">The <span style="color: #ef4444;"><b>heart &#10084;</b></span> to want change,</span>`,
  `<span style="font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 20px; color: white">The <span style="color: #f0abfc"><b>skills &#129504;</b></span> to make it happen.</span>`,
];

export default function TypingAnimation() {
  return (
    <Typewriter
      options={{ loop: true, autoStart: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString(styledText[0])
          .pauseFor(500)
          .deleteAll()
          .typeString(styledText[1])
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  );
}
