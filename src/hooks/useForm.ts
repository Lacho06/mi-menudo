import { useState } from "react"

export type InputData = (string | number | boolean | object)

export function useForm(initialData: InputData, action: (data: InputData) => void){
    const [data, setData] = useState(initialData)

    const changeData = (newValue: InputData) => {
        setData(newValue)
    }

    const submit = () => {
        action(data)
    }

    return [data, changeData, submit]
}