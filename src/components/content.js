import Details from "./userProfile";
import NoResult from "./noResult";

export default function Profile(props) {
  if (props.hasUser) {
    return (
      <>
        <Details user={props.profile} />
      </>
    );
  }
  return <NoResult />;
}
