import style from "./CreatePostForm.module.css";
import { postCategories, postTags } from "../../../constants/index";
import { useState } from "react";

const defaultValues = {
  title: "",
  description: "",
  category: "",
  tags: [],
  img: "",
  isPublished: false,
};

const CreatePostForm = ({ createPost }) => {
  const [form, setForm] = useState(defaultValues);

  function handleChange(e) {
    let tags = [...form.tags];

    if (e.target.id.startsWith("tag")) {
      const tag = e.target.value;
      if (tags.includes(tag)) tags = tags.filter((t) => t !== tag);
      else tags = [tag, ...tags];
    }

    let img = e.target.files?.item(0);

    if (img) img = URL.createObjectURL(img);
    else img = form.img;

    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
      tags,
      img,
    });
  }

  return (
    <form
      className={style.create_post__form}
      onSubmit={(e) => createPost(e, { id: Date.now(), ...form })}
    >
      <h2>Crea post</h2>
      <div className={style.input__group}>
        <label htmlFor="title">Titolo</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Titolo del post"
        />
      </div>
      <div className={style.input__group}>
        <label htmlFor="description">Descrizione</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          onChange={handleChange}
          value={form.description}
          placeholder="Descrizione del post"
        />
      </div>
      <div className={style.input__group}>
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
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
              <input
                type="checkbox"
                id={"tag-" + i}
                onChange={handleChange}
                value={pt.label}
                checked={form.tags.includes(pt.label)}
              />
              <label htmlFor={"tag-" + i}>{pt.label}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.input__group}>
        {!!form.img && (
          <figure>
            <img src={form.img} alt={form.title} className={style.post__img} />
          </figure>
        )}
        <input type="file" id="image" hidden onChange={handleChange} />
        <label htmlFor="image" className={style.upload__image}>
          Carica immagine
        </label>
      </div>
      <div className={style.input__group}>
        <input
          type="checkbox"
          id="post"
          name="isPublished"
          onChange={handleChange}
          hidden
        />
        <label htmlFor="post" className={"flex " + style.publish}>
          <p style={{ margin: 0 }}>Pubblica</p>
          <div className={style.inner__toggler}>
            <div className={style.toggler}></div>
          </div>
        </label>
      </div>
      <div className="flex">
        <button
          type="reset"
          className={"btn " + style.reset_post__btn}
          onClick={() => setForm(defaultValues)}
        >
          Resetta
        </button>
        <button className={"btn " + style.create_post__btn}>Invia</button>
      </div>
    </form>
  );
};
export default CreatePostForm;
