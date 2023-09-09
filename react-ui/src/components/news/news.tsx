import './news.scss';

const News = (): JSX.Element => {
  return (
    <div className="news">
      <h2>News</h2>
      <ul className='news__list'>
        <li>
          <div className='news__title'>Book Drive</div>
          <p>In partnership with JustServe, the Marietta Stake is sponsoring a book drive to benefit multiple organizations in our area. The drive has been extended one week until September 11, 2023. See the <a href="https://res.cloudinary.com/samuraijane/image/upload/v1626933506/wcnews/images/20230820-book-drive.jpg">flyer</a> for more information.</p>
        </li>
      </ul>
    </div>
  );
};

export default News;