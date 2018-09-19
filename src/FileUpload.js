import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
	handleUploadImage = e => {
		e.preventDefault();
		const data = new FormData();
		data.append('file', this.uploadInput.files[0]);
		data.append('filename', this.fileName.value);
		axios.post('http://localhost:8000/upload', data)
			.then(res => {
				console.log("Uploaded successfully.");
			})
			.catch(e => {
				console.log(e);
			});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleUploadImage}>
					<div>
						<input ref={ref => { this.uploadInput = ref; }} type="file" />
					</div>
					<div>
						<input ref={ref => { this.fileName = ref; }} type="text" placeholder="file" />
					</div>
					<div>
						<button type="submit">Upload</button>
					</div>
				</form>
			</div>
		)
	}
}

export default FileUpload;