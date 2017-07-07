import React, { Component } from 'react';
import '../css/ImportForm.css';

export default class ImportForm extends Component {
  state = {};

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.clear) {
      this.file.value = '';
      nextProps.onClear();
    }
  }

  onFileChanged = (event) => {
    let fileName;
    if (event.target.files && event.target.files.length) {
      fileName = event.target.files[0].name;
      this.props.onFileChanged && this.props.onFileChanged(event.target.files[0]);
    } else {
      fileName = this.props.defaultName;
    }

    this.setState({fileName});
  }

  render() {
    const { className, defaultName } = this.props;
    const { fileName } = this.state;

    return (
      <label className={`${className || ''} custom-file`}>
        <input ref={file => this.file = file}
          type="file"
          className="custom-file-input"
          onChange={event => this.onFileChanged(event)} />
        <span data-content={fileName || defaultName || 'Choose a file...'}
          id="upload-file"
          className="custom-file-control custom-file-name" />
      </label>
    );
  };
}