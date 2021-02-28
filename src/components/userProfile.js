import Bio from "./profileDetails/bio";
import Organization from "./profileDetails/organization";

export default function Details(props) {
  const profile = props.user;

  return (
    <>
      <div class="card">
        <div class="card-header">
          <img
            alt={`${profile.login}`}
            width={"100%"}
            height={"100%"}
            src={`${profile.avatar_url}`}
          />
        </div>
        <div class="card-body">
          <h2 class="name">{profile.name}</h2>
          <h4 class="job-title">
            <Organization company={profile.company} />
          </h4>
          <div class="bio">
            <Bio bio={profile.bio} />
          </div>
        </div>

        <div class="card-footer">
          <div class="stats">
            <div class="stat">
              <span class="label">Followers</span>
              <span class="value">{profile.followers}</span>
            </div>
            <div class="stat">
              <span class="label">Following</span>
              <span class="value">{profile.following}</span>
            </div>
            <div class="stat">
              <span class="label">Public repos</span>
              <span class="value">{profile.public_repos}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
