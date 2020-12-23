import React, { Component, Fragment } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { orderBy } from "lodash";
class Test1 extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        key: "name",
        text: "Name",
        className: "name",
        sortable: true,
      },
      {
        key: "address",
        text: "Address",
        sortable: true,
      },
      {
        key: "postcode",
        text: "Postcode",
        className: "postcode",
        sortable: true,
      },
      {
        key: "rating",
        text: "Rating",
        className: "rating",
        sortable: true,
      },
      {
        key: "type_of_food",
        text: "Type of Food",
        className: "type_of_food",
        sortable: true,
      },
      {
        key: "action",
        text: "Action",
        cell: (record, index) => {
          return (
            <Fragment>
              <button
                className="btn btn-primary btn-sm"
                onClick={this.editRecord.bind(this, record, index)}
                style={{ marginRight: "5px" }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.deleteRecord.bind(this, record, index)}
              >
                Delete
              </button>
            </Fragment>
          );
        },
      },
    ];
    this.config = {
      page_size: 2,
      length_menu: [10, 20, 50],
      show_filter: true,
      show_pagination: true,
      filename: "restaurents",
      button: {
        excel: true,
        csv: true,
        print: true,
      },
    };
    this.state = {
      records: [
        {
          name: "lorem245",
          address: "1234",
          postcode: "1234",
          rating: "12314",
          type_of_food: "1234",
        },
        {
          name: "lorem245",
          address: "5234",
          postcode: "5234",
          rating: "52314",
          type_of_food: "5234",
        },
        {
          name: "lorem245",
          address: "1234",
          postcode: "1234",
          rating: "12314",
          type_of_food: "1234",
        },
      ],
    };
  }

  editRecord = (record, index) => {
    console.log("Edit record", index, record);
  };

  deleteRecord = (record, index) => {
    console.log("Delete record", index, record);
  };

  onSort = (column, records, sortOrder) => {
    return orderBy(records, [column], [sortOrder]);
  };

  render() {
    return (
      <div>
        <ReactDatatable
          config={this.config}
          records={this.state.records}
          columns={this.columns}
          onSort={this.onSort}
        />
      </div>
    );
  }
}
export default Test1;
