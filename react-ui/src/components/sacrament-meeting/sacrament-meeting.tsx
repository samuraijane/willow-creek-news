import "./sacrament-meeting.scss";

export const SacramentMeeting = () => {

  return (
    <div className="s-mtg">
      <h2>Willow Creek Ward Sacrament Meeting</h2>
      <p className="s-mtg__row s-mtg__date">September 10, 2023</p>
      <div className="s-mtg__row s-mtg__admins">
        <div className="s-mtg__admin">
          <span>Conducting</span>
          <span>Charlie Crose</span>
        </div>
        <div className="s-mtg__admin">
          <span>Presiding</span>
          <span>Bishop Matthew Rose</span>
        </div>
        <div className="s-mtg__admin">
          <span>Chorister</span>
          <span>Susie Carson</span>
        </div>
        <div className="s-mtg__admin">
          <span>Organist</span>
          <span>Nancy Jensen</span>
        </div>
      </div>
      <div className="s-mtg__row s-mtg__static">Welcome and Announcements</div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Opening Hymn</span>
        <span>Rock of Ages (#111)</span>
      </div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Invocation</span>
        <span>by invitation</span>
      </div>
      <div className="s-mtg__row s-mtg__static">Ward Business</div>
      <div className="s-mtg__row s-mtg__static">Stake Business</div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Sacrament Hymn</span>
        <span>As Now We Take the Sacrament (#169)</span>
      </div>
      <div className="s-mtg__row s-mtg__static">Administration of the Sacrament</div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Speaker</span>
        <span>Lori Neerings</span>
      </div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Intermediate Hymn</span>
        <span>I Stand All Amazed (#193)</span>
      </div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Speaker</span>
        <span>Mark Prestwich</span>
      </div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Closing Hymn</span>
        <span>Now Let Us Rejoice (#3)</span>
      </div>
      <div className="s-mtg__row s-mtg__pair">
        <span>Benediction</span>
        <span>by invitation</span>
      </div>
    </div>
  );
}