using System;
using System.Collections.Generic;
using bakeryApi.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace bakeryApi.Repository
{
    public class Products: IProduct
    {
        private readonly AppDbContext _appDbContext;
        public Products(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public bool SaveChanges()
        {
            return (_appDbContext.SaveChanges() >= 1);
        }


        // for testing purposes
        public string health() => "api is working";
        
        
        public async Task<IEnumerable<Product>> allProducts()
        {
            List<Product> data = await _appDbContext.products.ToListAsync();
            return data;
        }


        public async Task<Product> product(int id)
        {
            var productInDatabase = await _appDbContext.products.FindAsync(id);
            try
            {
                if(productInDatabase == null){ throw new ArgumentException(); }
            }
            catch(ArgumentException err)
            {
                Console.WriteLine(err.Message);
            }
            return productInDatabase;
        }

        public async Task CreateProduct(Product dataInput)
        {
            var products = _appDbContext.products.ToList();
            foreach(var product in products)
            {
                try
                {
                    if (dataInput.Name == product.Name)
                    {
                        throw new ArgumentException();
                    }
                }
                catch(ArgumentException err)
                {
                    Console.WriteLine("The product with same name already exists ", err.Message);
                }
            }
            _appDbContext.products.Add(dataInput);
            await _appDbContext.SaveChangesAsync();
        }


        public async Task deleteProduct(int id)
        {
            var product = await _appDbContext.products.FindAsync(id);
            if (product == null)
            {
                throw  new ArgumentNullException();
            }
            _appDbContext.products.Remove(product);
            await _appDbContext.SaveChangesAsync();
        }


        public async Task updateProduct(int id)
        {
            var product = await _appDbContext.products.FindAsync(id);
            if (product == null)
            {
                throw new ArgumentException();
            }

            _appDbContext.Entry(product).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
        }

    }
}