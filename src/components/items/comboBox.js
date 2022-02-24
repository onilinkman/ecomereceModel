import React from "react";

class ComboBox extends React.Component {
  render() {
    return (
      <select
        style={{
          borderRadius: "15px",
          height: "34px",
          width: "50%",
          borderColor: "blanchedalmond",
          background: "border-box",
        }}
      >
        {this.props.data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    );
  }
}

export default ComboBox;
