import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../untils/constants'
const Categories = ({selectCategory,setSelectedCategory}) => (
    <Stack 
    direction='row'
    sx={{
        overflowY:'auto',
        height:{sx:'auto',md:'92%'},
        flexDirection:{md:'column'},
    }}>
        {categories.map((Category)=>(
        <button 
        className='category-btn'
        onClick={() => setSelectedCategory(Category.name)}
        style={{background:Category.name === selectCategory && '#CD1818',color:'#E6DDC4'}}
        key={Category.name}
        >
        <span style={{ color:Category.name === selectCategory ? '#E6ddc4' : '#cd1818',marginRight:'15px'}}> {Category.icon}</span>
        <span style={{opacity:Category.name === selectCategory ? '1':'0.8'}}>{Category.name}</span>
        </button>
            ))}
    </Stack>
  
)

export default Categories 