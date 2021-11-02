import { useEffect, useState } from 'react';

const Profile = (): JSX.Element => {

  const [level, setLevel] = useState(null);

  useEffect(() => {
    fetch('/profile/info')
      .then(json => json.json())
      .then(data => setLevel(data.x))
  }, []);

  return (
    <div>
      Profile
      Level {level}
    </div>
  );
};

export default Profile;