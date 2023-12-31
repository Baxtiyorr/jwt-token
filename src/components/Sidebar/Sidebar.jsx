import { useContext, useState } from 'react';
import { CategoryContext } from '../useContext/CtategoryContext';
import './Sidebar.scss'

import { IoIosArrowDown } from "react-icons/io";


const Sidebar = () => {
    const { selectedCategory, updateCategory } = useContext(CategoryContext);

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        updateCategory(category);
      };

    const [active, setActive] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    console.log(selectedCategory);

    const [openColor, setOpenColor] = useState(false)
    const [openSize, setOpenSize] = useState(false)

  return (
    <section>
      <div className="container">
        <h3 className='sidebar-title'>249 Products</h3>
        <div className="categories">
          <form onSubmit={handleSubmit}>
            <div className="dropdown">
              <button className="dropbtn" onClick={()=> setActive(!active)}>Category <IoIosArrowDown/></button>
              <div className={`dropdown-content ${active ? 'active' : ''}`} >
              <label className='label'>
                  <input type="radio" name='category' value=''
                checked={selectedCategory === ''}
                onChange={handleCategoryChange}/>
                    All
                </label>
                <label className='label'>
                  <input type="radio" name='category'  value='category/electronics'
                    checked={selectedCategory === 'category/electronics'}
                    onChange={handleCategoryChange}/>
                    Electronics
                </label>
                <label className='label'>
                  <input type="radio" name='category'  value='category/jewelery'
                    checked={selectedCategory === 'category/jewelery'}
                    onChange={handleCategoryChange}/>
                  Jewelery
                </label>
                <label className='label'>
                  <input type="radio" name='category' value={`category/men's clothing`}
                    checked={selectedCategory === `category/men's clothing`}
                    onChange={handleCategoryChange}/>
                  Men`s clothing
                </label>
                <label className='label'>
                  <input type="radio" name='category'  value={`category/women's clothing`}
                    checked={selectedCategory === `category/women's clothing`}
                    onChange={handleCategoryChange}/>
                  Women`s clothing
                </label>
                {/* Добавьте другие категории по мере необходимости */}
              </div>
            </div>
          </form>
        </div>
        <div className="colors">
            <div className="dropdown">
                <button className='dropbtn' onClick={()=> setOpenColor(!openColor)}> Colors <IoIosArrowDown/></button>
                <div className={`drop-colors  ${openColor ? 'active' : ''} `}>
                    <div className="color-wrapper">
                        <div className="color"></div>
                        <h4>Black</h4>
                    </div>
                    <div className="color-wrapper">
                        <div className="color-2"></div>
                        <h4>Blue</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-3"></div>
                        <h4>Brown</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-4"></div>
                        <h4>Green</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-5"></div>
                        <h4>Grey</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-6"></div>
                        <h4>Orange</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-7"></div>
                        <h4>Pink</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-8"></div>
                        <h4>Red</h4>
                    </div> <div className="color-wrapper">
                        <div className="color-9"></div>
                        <h4>Tan</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="size">
            <div className="dropdown">
                <button className='dropbtn' onClick={()=> setOpenSize(!openSize)} >Size<IoIosArrowDown/></button>
                <div className={`drop-size  ${openSize ? 'active' : ''} `}>
                   <div className="waist">
                    <h3>Waist</h3>
                    <div className="waist-sizes">
                        <div>36</div>
                        <div>38</div>
                        <div>40</div>
                        <div>42</div>
                        <div>44</div>
                        <div>46</div>
                        <div>48</div>
                        <div>50</div>
                    </div>
                   </div>
                   <div className="waist">
                    <h3>Clothing</h3>
                    <div className="waist-sizes">
                        <div>XXS</div>
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                        <div>XXXL</div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  )
}

export default Sidebar
