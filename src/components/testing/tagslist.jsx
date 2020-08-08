import React, { Component } from "react";
import "./testing.css";

class TagsList extends Component {
  state = {
    tags: [],
  };

  renderTags() {
    const { tags } = this.state;
    if (tags.length === 0) return <p>No content</p>;
    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
}

export default TagsList;
