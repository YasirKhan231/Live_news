export default function News(newmsg) {
  return (
    <div className="news">
      <div className="news-img">
        {newmsg.msg.urlToImage !== null ? (
          <img src={newmsg.msg.urlToImage} />
        ) : (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWieQ-4kYhiLJUdZ8LV3PXqaIg9oqvRk-8Q&usqp=CAU" />
        )}
      </div>
      <h3>{newmsg.msg.title}</h3>
      <p>
        {newmsg.msg.description?.substring(0, 100).concat("...")}
        <a href={newmsg.msg.url} target="not_blank">
          Read more
        </a>
      </p>

      <div className="source">
        <p>Author :{newmsg.msg.author}</p>
        <p>{newmsg.msg.source.name}</p>
      </div>
    </div>
  );
}
