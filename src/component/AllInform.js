import React, { Component } from "react";
import "./AllInform.css";

const courses = [
  "Коти",
  "Собаки",
  "Коні",
  "Хомяки",
  "Кури",
  "Кози",
  "Кролі",
  "Корови",
  "Миші",
  "Лисиці",
  "Вовки",
  "Ведмеді",
  "Птахи",
  "Змії",
  "Зайці",
];

class AllInform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: [],
    };
  }

  render() {
    let options;
    if (this.state.search.length) {
      const search = new RegExp(
        this.state.search.map((term) => `(?=.*${term})`).join(""),
        "i"
      );
      options = courses.filter((option) => option.match(search));
    } else {
      options = courses;
    }
    return (
      <div>
        <h2 className="txt-sr">Всі оголошення</h2>

        <input
          type="text"
          placeholder="Введіть тварину "
          className="search-enter"
          onChange={(e) => this.setState({ search: e.target.value.split(" ") })}
        />
        <div>
          <ul className="serch-list">
            {options.map((option, i) => (
              <p className="item-search" key={option + i}>
                {option}
              </p>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AllInform;
