import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getSendPhotoStatus } from "../store/offerSlice";

interface InputContextState {
    files: File[],
    setFiles: (files: File[]) => void
}

export const InputFilesContext = createContext({
    files: [],
    setFiles: (files: File[]) => {}
} as InputContextState)

export function useUploadFiles () {
    return useContext(InputFilesContext)
}

export default function UploadFiles ({ children } : { children : ReactNode } ) {

    const [files, setFiles] = useState<File[]>([]);

    const sendPhotoStatus = useSelector(getSendPhotoStatus)

    useEffect(() => {
        if (sendPhotoStatus === "success") {
            setFiles([])
        }
    }, [sendPhotoStatus])

    return (
        <InputFilesContext.Provider value={{
            files,
            setFiles
        }}>
            {children}
        </InputFilesContext.Provider>
    )
}