using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bakeryApi.Models;
using bakeryApi.Repository;


namespace bakeryApi.Controllers 
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController: ControllerBase
    {

        private readonly IProduct _iproductInterface; 
        public ProductsController(IProduct iproductInterface)
        {
            _iproductInterface = iproductInterface;
        }


        [HttpGet("status")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<string> status()
        {
            return _iproductInterface.health();
        }  


        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<Product>> allProducts()
        {
            return await _iproductInterface.allProducts();
        }


        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Product>> product(int id)
        {
            if (id == 0){ return NotFound(); }
            return await _iproductInterface.product(id);
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult> createProduct(Product productInput)
        {
            await _iproductInterface.CreateProduct(productInput);
            return CreatedAtAction(nameof(product), new {id = productInput.Id}, productInput);
        }


        [HttpDelete]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> deleteProduct(int id)
        {
            await _iproductInterface.deleteProduct(id);
            return NoContent();
        }


        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> updateProduct(int id, Product product)
        {
            if(id != product.Id)
            {
                return BadRequest();
            }
            await _iproductInterface.updateProduct(id);
            return NoContent();
        }

    }
}