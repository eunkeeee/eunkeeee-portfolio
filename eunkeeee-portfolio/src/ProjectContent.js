const Content = ({ imgSrc, title, subtitle }) => {
  return (
    <div>
      <img src={imgSrc} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div>
        <h5>ReactJS</h5>
        <h5>개인</h5>
      </div>
    </div>
  );
};
export default Content;
