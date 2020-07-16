import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

const Dropzone = ( {onFileUploaded, fileFromUrl} ) =>{
    const [selectedFileUrl, setSelectedFileUrl] = useState('')
    
    useEffect(()=>{    
        
        if (fileFromUrl !== undefined) {
            setSelectedFileUrl(fileFromUrl);
        }    
        //setSelectedFileUrl( `${fileFromUrl}` )
    },[fileFromUrl])

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]

        const fileUrl = URL.createObjectURL( file )
        console.log(fileUrl);

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

            isDragActive ?
                <p>
                    <FiUpload />
                    Agora solte o arquivo
                </p> :

                
                    selectedFileUrl
                        ? <img src={selectedFileUrl} alt="Point thumbnail " />
                        : 
                        <p> 
                            <FiUpload />
                            Arraste algum arquivo aqui ou clique para selecionar um arquivo
                        </p>
        } 

        </div>
    )
}

export default Dropzone