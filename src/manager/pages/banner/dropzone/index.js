import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

const Dropzone = ( {onFileUploaded} ) =>{
    const [selectedFileUrl, setSelectedFileUrl] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL( file )
        setSelectedFileUrl( fileUrl )
        onFileUploaded( file )
    }, [onFileUploaded])
    const {getRootProps, getInputProps, isDragActive} = useDropzone(
            {
            onDrop,
            accept: 'image/*'
            })

    return (
        <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} accept="image/*" />

        { 
            selectedFileUrl 
            ? <img src={selectedFileUrl} alt="Point thumbnail" />
            : 
                    isDragActive ?
                        <p>
                            <FiUpload />
                            Arraste o arquivo da image do estabelecimento aqui ...
                        </p> :
                        <p>
                            <FiUpload />
                            Arraste algum arquivo aqui ou clique para selecionar um arquivo
                        </p>
                
            

        } 

        
        </div>
    )
}

export default Dropzone