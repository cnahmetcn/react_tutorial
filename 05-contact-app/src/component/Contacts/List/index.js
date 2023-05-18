import { useState } from "react";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  console.log(filtered)

  return (
    <div>
      <input type="text" name="filter" placeholder="Filtrele" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
      <ul className="list">
        {filtered.map((c, i) => (
          <li key={i}>
            <span> {c.fullname} </span>
            <span> {c.phonenumber} </span>
          </li>
        ))}
      </ul>
      <p>
        Total: {filtered.length}
      </p>
    </div>
  );
};

export default List;
