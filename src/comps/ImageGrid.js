import React from "react";
import useFirestore from '../hooks/useFirestore';
import { motion } from "framer-motion";

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded pic" /> 
                    <motion.img src={doc.url} alt="uploaded pic"
                    initial={{ oapcity: 0 }}
                    animate={{ oapcity: 1 }}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            )    
            )}
        </div>
    )
}

export default ImageGrid;