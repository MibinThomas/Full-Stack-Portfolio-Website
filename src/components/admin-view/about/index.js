'use client'
import FormControls from "../form-controls"
const controls = [
    {
        name: 'Position',
        placeholder: 'Position',
        type: 'text',
        label: 'Position'
    },
    {
        name: 'Company',
        placeholder: 'Company',
        type: 'text',
        label: 'Company'
    },
    {
        name: 'Duration',
        placeholder: 'Duration',
        type: 'text',
        label: 'Duration'
    },
    {
        name: 'name',
        placeholder: 'Project Name',
        type: 'text',
        label: 'Project Name'
    },
    {
        name: 'Technologies',
        placeholder: 'Technologies',
        type: 'text',
        label: 'Technologies'
    },
    {
        name: 'Website',
        placeholder: 'Website',
        type: 'text',
        label: 'Website'
    },
    {
        name: 'github',
        placeholder: 'github',
        type: 'text',
        label: 'github'
    },
]

export default function AdminAboutView(formData, setFormData) {
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