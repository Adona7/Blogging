import React from 'react'
import './Category.css';

function Category() {
  return (
    <div>
        <div class="ctg-main">
            <h1>Categories</h1>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

    <div class="col-6">
<div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>

    </div>
  )
}

export default Category