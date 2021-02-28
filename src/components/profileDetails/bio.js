export default function Bio(props) {
  if (props.bio) {
    return <>{props.bio}</>;
  } else {
    return <></>;
  }
}
