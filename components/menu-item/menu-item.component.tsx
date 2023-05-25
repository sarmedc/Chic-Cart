import "./menu-item.styles.scss";

interface MenuItem {
  title: string;
  imageUrl: string;
  size: number;
  history: any;
  linkUrl: string;
  match: any;
}

export const MenuItem: React.FC<MenuItem> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
