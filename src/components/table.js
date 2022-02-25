import React from "react";

class TableLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.maxRows = 5;
    this.numberOfObjects = 10;
    this.pageActual = 1;
    this.pointer = 4;
    this.idName =
      this.props.idName === undefined ? "tableDefault" : this.props.idName;
    this.className =
      this.props.className === undefined
        ? "table table-striped table-bordered"
        : this.props.className;
  }

  CreateTable() {
    if (this.props.data.length > 0) {
      var dataKeys = Object.keys(this.props.data[0]);
      return (
        <table className={this.className} id={this.idName}>
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
  /**
   * adiciona la cabecera extra en la tabla
   * @param {objeto a adicionar a la cabecera} data
   * @returns
   */
  AddHeaderExtra(data) {
    if (typeof data === "object") {
      var newTh = data.map((obj) => {
        let key = Object.keys(obj)[0];
        return <th key={key}>{key}</th>;
      });
      return newTh;
    }
  }

  /**
   * A partir de un objeto JSON se crea el contenido de la tabla,
   * tambien adiciona las columnas extras que vienen departe de
   * HeaderExtraBefore y HeaderExtraAfter antes y despues del contenido
   * original respectivamente
   * @param {json a mostrar} data
   * @param {claves json a mostrar} dataKeys
   * @returns
   */
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

  /**
   * Crea una columna extra
   * @param {json a adicionar} data
   * @param {nro de fila actual} row
   * @param {*} dataMap
   * @returns
   */
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

  CreatePaginador(actualPage, totalPages) {
    if (actualPage < totalPages) {
      if (actualPage < this.pointer + 4 || actualPage == totalPages - 1) {
        return [
          <button>{actualPage}</button>,
          this.CreatePaginador(actualPage + 1, totalPages),
        ];
      } else if (actualPage == this.pointer + 4) {
        return [
          <h3>....</h3>,
          this.CreatePaginador(actualPage + 1, totalPages),
        ];
      } else {
        return this.CreatePaginador(actualPage + 1, totalPages);
      }
    }
    return <button>{actualPage}</button>;
  }

  render() {
    return (
      <div>
        {this.CreateTable()}
        <div style={{ display: "flex" }}>
          {this.CreatePaginador(this.pointer + 1, 14)}
        </div>
      </div>
    );
  }
}

export default TableLibrary;
