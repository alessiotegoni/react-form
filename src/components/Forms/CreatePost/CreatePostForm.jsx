import style from "./CreatePostForm.module.css";
import { postCategories, postTags } from "../../../constants/index";

const CreatePostForm = () => {
  return (
    <form className={style.create_post__form}>
      <h2>Crea post</h2>
      <div className={style.input__group}>
        <label htmlFor="title">Titolo</label>
        <input type="text" id="title" placeholder="Titolo del post" />
      </div>
      <div className={style.input__group}>
        <label htmlFor="description">Descrizione</label>
        <textarea
          id="description"
          rows="5"
          placeholder="Descrizione del post"
        />
      </div>
      <div className={style.input__group}>
        <label htmlFor="category">Categoria</label>
        <select id="category">
          <option>Seleziona categoria</option>
          {postCategories.map((pc, i) => (
            <option key={i} value={pc.value}>
              {pc.label}
            </option>
          ))}
        </select>
      </div>
      <div className={style.input__group}>
        <p>Tags</p>
        <ul className={"flex " + style.tags__list}>
          {postTags.map((pt, i) => (
            <li key={i} className="flex">
              <input type="checkbox" id={"tag-" + i} />
              <label htmlFor={"tag-" + i}>{pt.label}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.input__group}>
        <input type="file" id="image" hidden />
        <label htmlFor="image" className={style.upload__image}>
          Carica immagine
        </label>
      </div>
      <div className={style.input__group}>
        <input type="checkbox" id="post" hidden />
        <label htmlFor="post" className={"flex " + style.publish}>
          <p style={{ margin: 0 }}>Pubblica</p>
          <div className={style.inner__toggler}>
            <div className={style.toggler}></div>
          </div>
        </label>
      </div>
      <div className="flex">
        <button type="reset" className={"btn " + style.reset_post__btn}>
          Resetta
        </button>
        <button className={"btn " + style.create_post__btn}>Invia</button>
      </div>
    </form>
  );
};
export default CreatePostForm;
