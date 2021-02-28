export default function Organization(props) {
  if (props.company) {
    return (
      <>
        {props.company}
      </>
    );
  } else {
    return <></>;
  }
}
