import React, { useEffect, useState } from 'react'
import AppLayout from '../layouts/AppLayout'
import { getAllCategories } from '../hooks/hooks'
import Category from '../components/Category';

const Categories = () => {

  const [categories, setCategories] = useState([]); 

  const getCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (categories.length == 0) {
     return "Loading...";
  }



  return (
    <AppLayout>
        <main>
          <div className="container">
              {categories.map(category=> (
                <Category />
              ))}
          </div>
        </main>
    </AppLayout>
  )
}

export default Categories