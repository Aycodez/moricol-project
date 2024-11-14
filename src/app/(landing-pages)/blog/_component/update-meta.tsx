"use client"

import { useEffect } from 'react'

interface UpdateMetaProps {
    title?: string
    description?: string
}

export default function UpdateMeta({ title, description }: UpdateMetaProps) {
    useEffect(() => {
        if (title) {
            document.title = title
        }
        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]')
            if (metaDescription) {
                metaDescription.setAttribute('content', description)
            } else {
                const meta = document.createElement('meta')
                meta.name = 'description'
                meta.content = description
                document.head.appendChild(meta)
            }
        }
    }, [title, description])

    return null
}
