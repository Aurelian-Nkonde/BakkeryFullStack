using System;
using Microsoft.EntityFrameworkCore;


namespace bakeryApi.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt): base(opt){}
        public DbSet<Product> products { get;set; }
    }
}