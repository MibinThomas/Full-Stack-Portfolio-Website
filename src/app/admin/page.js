'use client'

import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/projects"
import { useState } from "react"

const initialHomeFormData = {
 heading :'',
 summary :''
}

export default function AdminView() {

    const [currentSelectedTab,setCurrentSelectedTab] = useState('home');
    const [homeViewFormData, sethomeViewFormData] = useState(initialHomeFormData)

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            component :<AdminHomeView formData={homeViewFormData} setFormdata ={sethomeViewFormData}/>
        },
        {
            id: 'about',
            label: 'About',
            component :<AdminAboutView/>
        },
        {
            id: 'eperience',
            label: 'Experience',
            component :<AdminExperienceView/>
        },
        {
            id: 'education',
            label: 'Education',
            component :<AdminEducationView/>
        },
        {
            id: 'projects',
            label: 'Projects',
            component :<AdminProjectView/>
        },
        {
            id: 'contact',
            label: 'Contact',
            component :<AdminContactView/>
        }
    ]

    return (
        <div className="border-b border-gray-200">
            <nav className="-mb-0.5 flex justify-center space-x-6"
                role="tablist">
                {
                    menuItems.map(item => (
                        <button key={item.id}
                            type="button"
                            className="p-4 font-bold text-xl text-black"
                            onClick={()=>{
                                setCurrentSelectedTab(item.id)
                            }}>
                            {item.label}</button>
                    ))
                }
            </nav>
            <div
            className="mt-10 p-10">
                {
                    menuItems.map(item => item.id === currentSelectedTab && item.component)
                }

            </div>
        </div>
    )
}