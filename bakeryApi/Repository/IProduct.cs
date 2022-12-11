using System;
using System.Collections.Generic;
using bakeryApi.Models;

namespace bakeryApi.Repository 
{
    public interface IProduct 
    {
        bool SaveChanges();
        string health();
        Task<IEnumerable<Product>> allProducts();
        Task<Product> product(int id);
        Task CreateProduct(Product dataProduct);
        Task deleteProduct(int id);
        Task updateProduct(int id);

    }
}