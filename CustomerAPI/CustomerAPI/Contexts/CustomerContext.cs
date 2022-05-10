using CustomerAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace CustomerAPI.Contexts
{
    public class CustomerContext:DbContext
    {

        public CustomerContext(DbContextOptions<CustomerContext> options) 
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Address> Addresses { get; set; }

       
    }
}
