export default function Burger({
  url = "",
  title = "burger",
  description = "burger description",
}) {
  return (
    <div className="menu-item">
      <img src={url} alt={title} width="250px" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
