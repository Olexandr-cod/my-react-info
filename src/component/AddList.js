import React, { Component } from "react";
// import { ReactComponent } from "*.svg";
import "./AddList.css";
import DateAddInform from "./DateAddInform";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",

      SocialData: [],
      socialArray: [
        {
          id: 1,
          title: "Кіт",
        },
        {
          id: 4,
          title: "Собака",
        },
        {
          id: 5,
          title: "Папуга",
        },
        {
          id: 6,
          title: "Хомяк",
        },
        {
          id: 8,
          title: "Рибка",
        },
        {
          id: 9,
          title: "Кінь",
        },
        {
          id: 11,
          title: "Кури",
        },
        {
          id: 12,
          title: "Корова",
        },
        {
          id: 13,
          title: "Коза",
        },
        {
          id: 14,
          title: "і тд.",
        },
      ],
    };
    this.AddInform = this.AddInform.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteInform = this.deleteInform.bind(this);
    this.handleInformNameChange = this.handleInformNameChange.bind(this);
  }

  AddInform() {
    let array = this.state.SocialData;
    array.push({ id: array.length + 1, socialname: "" });
    this.setState({ SocialData: array });
  }

  handleInputChange(e, idx) {
    let nextSocialData = this.state.SocialData.slice();
    nextSocialData[idx].title = e.target.value;
    this.setState({
      SocialData: nextSocialData,
    });
  }

  handleInformNameChange(socialName, idx) {
    let nextSocialData = this.state.SocialData.slice();
    nextSocialData[idx].socialname = socialName;
    this.setState({ SocialData: nextSocialData });
  }

  deleteInform(idx) {
    let someArray = this.state.SocialData;
    someArray.splice(idx, 1);
    this.setState({ SocialData: someArray });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <button className="head-btn" type="submit" onClick={this.AddInform}>
            <span>
              <span className="buttonText">Додати оголошення</span>
            </span>
          </button>

          <table className="table">
            <tbody>
              {this.state.SocialData.map((Social, idx) => (
                <tr key={idx} className="table-all">
                  <td>
                    <input type="checkbox" className="check" />
                  </td>
                  <td className="option-text">
                    <select
                      onChange={(e) => {
                        this.handleInformNameChange(e.target.value, idx);
                      }}
                      value={Social.socialname || "SelectOption"}
                      className="manu-enter"
                    >
                      <option value="SelectOption" disabled>
                        Вибрати назву тварини
                      </option>
                      {this.state.socialArray.map((socidata) => (
                        <option
                          value={socidata.title}
                          data={socidata}
                          key={socidata.id}
                        >
                          {socidata.title}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="text-inform">
                    <input
                      type="text"
                      placeholder="Опис"
                      value={Social.name}
                      onChange={(e) => this.handleInputChange(e, idx)}
                    />
                  </td>
                  <td>
                    <DateAddInform />
                  </td>

                  <td className="delete-text">
                    <button
                      className="delete-btm"
                      onClick={() => this.deleteInform(idx)}
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AddList;
