import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia(props) {
  const socials = props.arr;
  return (
    <>
      {socials.map((social) => (
        <a key={social.url} href={social.url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={social.iconName}
            size="3x"
            className="socialIcon"
          />
        </a>
      ))}
    </>
  );
}
/*
  return (
    <a key={social.url} href={social.url} target="_blank" rel="noreferrer">
      <FontAwesomeIcon
        icon={social.iconName}
        size="3x"
        className="socialIcon"
      />
    </a>
  ); */
