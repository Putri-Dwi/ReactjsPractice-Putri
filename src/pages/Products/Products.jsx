import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/getAllProducts';
import ProductList from '../../components/ProductList/ProductList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';
import getAllProductCategories from '../../services/getAllProductCategories';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [radioButtonOpts, setRadioButtonOpts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = () => {
    let allProducts = getAllProducts();
    allProducts = allProducts.length > 0 ? allProducts : [];
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  };

  const fetchCategories = () => {
    const categories = getAllProductCategories();
    const categoryOptions = categories.map(category => ({
      label: category.name,
      value: category.slug,
    }));
    setRadioButtonOpts([
      { label: 'All', value: 'all' },
      ...categoryOptions,
    ]);
  };

  const handleFilterChange = (selectedValue) => {
    let filtered = products;

    if (selectedValue !== 'all') {
      filtered = filtered.filter(product => product.category.toLowerCase() === selectedValue.toLowerCase());
    }

    const matchesSearch = filtered.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredProducts(matchesSearch);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    handleFilterChange('all');
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />

      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
        <h3 className='font-medium'>Filter</h3>
        <div className='flex gap-2 flex-wrap'>
          <RadioButton options={radioButtonOpts} defaultValue={'all'} onChange={handleFilterChange} />
        </div>
      </div>

      <section className='container px-24 py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mx-auto'>
          <ProductList products={filteredProducts} />
        </div>
      </section>
    </>
  );
}

export default Products;