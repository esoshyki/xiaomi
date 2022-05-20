import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useOfferData } from "../components/Offer/hooks/useOfferData";
import useOrderData from "../hooks/useOrderData";

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

    const { sendPhotoStatus } = useOrderData()

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