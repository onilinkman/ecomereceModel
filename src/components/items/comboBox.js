import React from "react";

class ComboBox extends React.Component {
  render() {
    return (
      <select>
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
