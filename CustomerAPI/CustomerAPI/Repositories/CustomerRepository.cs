using CustomerAPI.Contexts;
using CustomerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerAPI.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly CustomerContext _dbContext;

        public CustomerRepository(CustomerContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Customer> AddCustomer(Customer customer)
        {
         // var _transaction = _dbContext.Database.BeginTransactionAsync();
          var result= await this._dbContext.Customers.AddAsync(customer);
           await  _dbContext.SaveChangesAsync();
         // await  _transaction.CommitAsync();

            return result.Entity;

        }

        public async Task<bool> DeleteCustomerById(long CustomerId)
        {
            var result = await _dbContext.Customers
             .FirstOrDefaultAsync(c => c.CustomerId == CustomerId);
            if (result != null)
            {
                _dbContext.Customers.Remove(result);
               await  _dbContext.SaveChangesAsync();
            }

            if (await GetCustomerById(CustomerId) == null)
                return true;
            return false;
        }

        public async Task<IEnumerable<Customer>> GetAllCustomers()
        {
            return await  _dbContext.Customers.ToListAsync();
        }

        public async Task<Customer> GetCustomerById(long CustomerId)
        {
            var result = await _dbContext.Customers
             .FirstOrDefaultAsync(c => c.CustomerId == CustomerId);
            if (result != null)
                return result;
            return null;
        }

        public Customer UpdateCustomer(Customer customer)
        {
            var result =  _dbContext.Customers
                 .FirstOrDefault(c => c.CustomerId == customer.CustomerId);

            if (result != null)
            {
                result.Country = customer.Country;



                 _dbContext.SaveChanges();

                return result;
            }

            return null;
        }
    }
}
