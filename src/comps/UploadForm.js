import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('tolong pilih format gambar (png/jpeg)');
        }
    }

    return (
        <form>
            <label>
                <center>
                <span><input type="file" onChange={changeHandler} />+</span>
                </center>
                
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                <center>{file && <div>{file.name}</div>}</center>
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>

        </form>
    );
}

export default UploadForm;