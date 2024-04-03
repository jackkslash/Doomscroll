import React from 'react'
import MediaList from '../../../components/MediaList'
import { submitLink } from './actions';

export default function Page() {
    return (
        <div><MediaList submitLink={submitLink} ></MediaList></div>
    )
}
