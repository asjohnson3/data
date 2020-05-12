import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

export const FileUpload = ({ file, onNewFile }) => {
  // const initialState = {};
  const [state, setState] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", state);
      const response = await fetch("/upload", {
        method: "Post",
        body: formData,
      });
      if (response.ok) {
        console.log("Response Worked!");
        response.json().then((data) => {
          onNewFile(data);
        });
      }
    } catch (error) {}
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>File Upload</label>
        <input
          type="file"
          name="file"
          value={file.name}
          ref={file}
          onChange={(e) => setState(e.target.files[0])}
        />
      </div>
      <Button color="teal" type="submit" className="filtering-submit-button">
        SUBMIT
      </Button>
    </Form>
  );
};

// class Main extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       imageURL: "",
//     };

//     this.handleUploadImage = this.handleUploadImage.bind(this);
//   }

//   handleUploadImage(ev) {
//     ev.preventDefault();

//     const data = new FormData();
//     data.append("file", this.uploadInput.files[0]);
//     data.append("filename", this.fileName.value);

//     fetch("http://localhost:8000/upload", {
//       method: "POST",
//       body: data,
//     }).then((response) => {
//       response.json().then((body) => {
//         this.setState({ imageURL: `http://localhost:8000/${body.file}` });
//       });
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleUploadImage}>
//         <div>
//           <input
//             ref={(ref) => {
//               this.uploadInput = ref;
//             }}
//             type="file"
//           />
//         </div>
//         <div>
//           <input
//             ref={(ref) => {
//               this.fileName = ref;
//             }}
//             type="text"
//             placeholder="Enter the desired name of file"
//           />
//         </div>
//         <br />
//         <div>
//           <button>Upload</button>
//         </div>
//         <img src={this.state.imageURL} alt="img" />
//       </form>
//     );
//   }
// }
