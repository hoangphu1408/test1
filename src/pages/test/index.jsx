import React, { Component } from "react";
import JoditEditor from "jodit-react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: "",
      content: "",
      config: {
        readonly: false,
      },
    };
  }
  _handleChange = (e) => {
    console.log(e.target);
  };
  test = (vl) => {
    console.log(vl);
  };
  render() {
    return (
      <div>
        {" "}
        <h2>Using CKEditor 5 build in React</h2>
        <JoditEditor
          ref={this.state.editor}
          value={this.state.content}
          config={this.state.config}
          tabIndex={1} // tabIndex of textarea
          //onBlur={(newContent) => this.test(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => this.test(newContent)}
        />
      </div>
    );
  }
}

export default Test;
