'use client'

import FormControls from "../form-controls"



const controls = [
    {
        name: 'heading',
        placeholder: 'Enter Heading text',
        type: 'text',
        label: 'Enter Heading text'
    },
    {
        name: 'Summary',
        placeholder: 'Enter Career summary text',
        type: 'text',
        label: 'Enter Career summary text'
    }
]


export default function AdminHomeView(formData, setFormData) {
    return (
        <div className="w-full">
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData} />
                <button className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
                Add Info</button>
            </div>
        </div>
    )
}