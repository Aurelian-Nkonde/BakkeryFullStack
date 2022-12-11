using bakeryApi.Models;
using Microsoft.EntityFrameworkCore;
using bakeryApi.Repository;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IProduct, Products>();
//  builder.Services.AddDbContext<AppDbContext>(options =>
                // options.UseNpgsql(builder.
                    // Configuration.GetConnectionString("testing")));
builder.Services.AddDbContext<AppDbContext>(opt => opt.UseInMemoryDatabase("data"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseSwagger();
    // app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
