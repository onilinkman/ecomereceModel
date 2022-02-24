import React from "react";

class TableLibrary extends React.Component {
  CreateTable() {
    if (this.props.data.length > 0) {
      var dataKeys = Object.keys(this.props.data[0]);
      return (
        <table className={this.props.className}>
          <thead>{this.CreateTableHeader(this.props.data, dataKeys)}</thead>
          <tbody>{this.CreateBody(this.props.data, dataKeys)}</tbody>
        </table>
      );
    }
  }

  /**
   * Crea la cabecera de las tablas en base a los datos que se le pasan
   * @param {*} data
   */
  CreateTableHeader(data, dataKeys) {
    if (typeof data === "object") {
      var newTh = dataKeys.map((key) => {
        if (!this.props.skipHeader?.has(key)) {
          return <th key={key}>{key}</th>;
        }
      });
      return (
        <tr>
          {this.AddHeaderExtra(this.props.headerExtraBefore)}
          {newTh}
          {this.AddHeaderExtra(this.props.headerExtraAfter)}
        </tr>
      );
    }
  }

  AddHeaderExtra(data) {
    if (typeof data === "object") {
      var newTh = data.map((obj) => {
        let key = Object.keys(obj)[0];
        return <th key={key}>{key}</th>;
      });
      return newTh;
    }
  }

  CreateBody(data, dataKeys) {
    var newTrs = data.map((obj, i) => {
      return (
        <tr key={i}>
          {this.addRowExtraAction(obj, i, this.props.headerExtraBefore)}
          {this.AddRow(i, data, dataKeys)}
          {this.addRowExtraAction(obj, i, this.props.headerExtraAfter)}
        </tr>
      );
    });
    return newTrs;
  }

  addRowExtraAction(data, row, dataMap) {
    return dataMap?.map((key) => {
      let keyName = Object.keys(key)[0];
      return <td key={keyName}>{key[keyName](data, row)}</td>;
    });
  }

  AddRow(row, data, dataKeys) {
    var newTd = dataKeys?.map((key) => {
      if (!this.props.skipHeader?.has(key)) {
        return <td key={key}>{data[row][key]}</td>;
      }
    });

    return newTd;
  }

  render() {
    return <div>{this.CreateTable()}</div>;
  }
}

export default TableLibrary;
