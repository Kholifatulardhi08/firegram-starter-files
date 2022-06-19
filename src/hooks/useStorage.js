import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('telah diubah!', (snap) => {
            let percentage = (snap.bytesTransferred) / snap.totalBytes * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const creteadAt = timestamp();
            collectionRef.add({ url, creteadAt });
            setUrl(url);
        })
    }, [file]);

    return {progress, url, error}  
}

export default useStorage;