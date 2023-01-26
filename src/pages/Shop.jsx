import React, { Fragment ,useState} from 'react'
import { Container, Functionary, Input, ProductContainer, SearchContainer, SearchIcon, Select, SelectContainer, Title } from '../PagesStyle/ShopStyle'
import ProductList from '../components/Product/ProductList'
import products from '../assets/data/products'
import CommonSection from '../components/CommonSection/CommonSection'
const Shop = () => {
  const [productsData, setProductData]=useState(products);
  const filter = e =>{
    const filterOption = e.target.value
    if(filterOption === 'default'){
      setProductData(products)
    }
    else if(filterOption === 'sofa'){
      const filterData = products.filter(prod => prod.category === 'sofa')
      setProductData(filterData)
    }
    else if(filterOption === 'mobile'){
      const filterData = products.filter(prod => prod.category === 'mobile')
      setProductData(filterData)
    }
    else if(filterOption === 'watch'){
      const filterData = products.filter(prod => prod.category === 'watch')
      setProductData(filterData)
    }
    else if(filterOption === 'wireless'){
      const filterData = products.filter(prod => prod.category === 'wireless')
      setProductData(filterData)
    }
    else{
      const filterData = products.filter(prod => prod.category === 'chair')
      setProductData(filterData)
    }

  }
  const sort = e =>{
    const sortOption = e.target.value
    if(sortOption === 'ascending'){
      const sortData = products.sort((a,b) => a.price-b.price )
      setProductData(sortData)
    }
    else{
      const sortData = products.sort((a,b) => b.price-a.price )
      setProductData(sortData)
    }
  }
  const search = e =>{
    const searchOption = e.target.value
    const searchData = products.filter(item=>
      item.productName.toLowerCase().includes(searchOption.toLowerCase()))
        setProductData(searchData)
      

  }
  return (
    <Fragment>
      <Container>
        <CommonSection title={"Products"}></CommonSection>
          <Functionary>
           <SelectContainer>
           <Select onChange={filter}>
              <option value={'default'}>Filter By Category</option>
              <option value={'sofa'}>Sofa</option>
              <option value={'chair'}>Chair</option>
              <option value={'watch'}>Watch</option>
              <option value={'mobile'}>Mobile</option>
              <option value={'wireless'}>Wireless</option>
            </Select>
            <Select onChange={sort}>
              <option value={'ascending'}>Ascending</option>
              <option value={'descending'}>Descending</option>
            </Select>
           </SelectContainer>
            <SearchContainer>
            <Input placeholder='Search' onChange={search}/>
            <SearchIcon className='ri-search-line'></SearchIcon>
            </SearchContainer>
          </Functionary>
        <ProductContainer>
        {
          productsData.length >0 ?<ProductList data={productsData}></ProductList>
          :<h1>No products are found</h1>
        }
        
        </ProductContainer>
      </Container>
    </Fragment>
  )
}

export default Shop