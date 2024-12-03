import { Edit, Trash } from "lucide-react";
import style from "./Post.module.css";

const Post = ({
  id,
  title,
  description,
  category,
  tags,
  img,
  isPublished,
  deletePost,
}) => {
  return (
    <div
      className={`${style.post} ${!isPublished ? style.not__published : ""}`}
    >
      <figure>
        <img
          src={
            img ||
            "https://www.wpbeginner.com/wp-content/uploads/2017/08/set-a-default-fallback-image-for-wordpress-post-thumbnails-thumbnail.png"
          }
          alt={title}
        />
        <div className={"flex " + style.top__content}>
          <figcaption>{title}</figcaption>
          <p className={style.category}>{category}</p>
        </div>
      </figure>
      <p className={style.description}>{description}</p>
      <ul className={"flex " + style.tags__list}>
        {tags.map((tag, i) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
      <div className={"flex " + style.post__btns}>
        <button className="flex btn" onClick={() => deletePost(id)}>
          <Trash />
          Cancella
        </button>
        <button className="flex btn">
          <Edit />
          Modifica
        </button>
      </div>
    </div>
  );
};
export default Post;
