import { createContext, useContext, ReactNode, useState, useEffect } from "react";

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

    useEffect(() => {
        console.log(files)
    }, [files])

    return (
        <InputFilesContext.Provider value={{
            files,
            setFiles
        }}>
            {children}
        </InputFilesContext.Provider>
    )
}