using System;
using System.ComponentModel.DataAnnotations;

namespace bakeryApi.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Product-Name is required")]
        [MaxLength(200)]
        public string? Name { get; set; }
        [Required(ErrorMessage = "Product-Price is required")]
        [MaxLength(5)]
        [DataType(DataType.Currency)]
        public string? Price { get;set; }
        [Required(ErrorMessage = "Product-Ingrediants is required")]
        [MinLength(5)]
        public string? Ingredients { get;set; }
    }
}