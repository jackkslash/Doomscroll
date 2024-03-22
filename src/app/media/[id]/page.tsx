'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams()
    console.log(params)
    return (
        <div>{params.id}</div>
    )
}
