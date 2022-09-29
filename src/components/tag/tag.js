import React from 'react'
import Section from '../section/Section'
import { tags } from '../../data/skills.json'

const Tag = () => {
  return (
    <Section class='c-tag' title="Tag">
        <div className='top-tag container-inner'>
            {
                tags.map((tag, index) => {
                    return (<p className='tag' key={index}>{tag}</p>) 
                })
            }
        </div>
    </Section>
  )
}

export default Tag
