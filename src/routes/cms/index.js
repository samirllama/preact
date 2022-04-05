import style from "./style.css";
import { h } from "preact";
import { useState, useCallback } from "preact/hooks";
import create-model from "./../utils/create-model.js";

const Test = () => {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const [users, setUsers] = useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: 1, name: text }));
  };

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onInput = (event) => console.log(event.target);
  const handleValue = (event) => setValue(event.target.value);

  const cmsObject = {
    attributes: {
      regions: {
        body: [
          {
            component: {
              content: {
                text: [
                  "<p>Helloo</p>",
                  "<span> I'm a span in the body.</span>",
                ],
              },
            },
          },
        ],
        footnote: [
          {
            component: {
              id: "id-13413",
              title: "footnote-title",
              schema: "Footnote",
              content: {
                text: [
                  "<p>Footer</p>",
                  "<span> I'm a span in the footer. </span>",
                ],
              },
            },
            component: {
              id: "id-13413",
              title: "footnote-title",
              schema: "Footnote",
              content: {
                text: "<span> I'm a span in the footer. </span>",
              },
            },
          },
        ],
      },
      references: {
        91741949174: {
          component: {
            id: "id-88279724",
            title: "Reference 1 for now, will be useful soon",
            schema: "Footnote",
            content: {
              text: [
                "<h3>This is a text from 91741949174 reference</h3>",
                "<p> <strong> Second text from same reference < /strong> </p>",
                "<p> Third text from same reference </p>",
              ],
            },
          },
        },
      },
      id: "/CMS_OBJECT_ID/route/cms_object_id.json",
    },
  };

  return (
    <div class={style.test}>
      <h1>Test</h1>
      <form>
        <input onChange={handleValue} type="text" value={value} />
        <button type="submit"> Click me</button>
      </form>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>
      <List list={users} onRemove={handleRemove} />
    </div>
  );
};

const List = ({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, onRemove }) => {
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
};
export default Test;
