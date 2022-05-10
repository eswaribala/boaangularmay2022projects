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

        public Customer AddCustomer(Customer customer)
        {
         // var _transaction = _dbContext.Database.BeginTransactionAsync();
          var result= this._dbContext.Customers.Add(customer);
          _dbContext.SaveChanges();
         // await  _transaction.CommitAsync();

            return result.Entity;

        }

        public bool DeleteCustomerById(long CustomerId)
        {
            var result = _dbContext.Customers
             .FirstOrDefault(c => c.CustomerId == CustomerId);
            if (result != null)
            {
                _dbContext.Customers.Remove(result);
                _dbContext.SaveChanges();
            }

            if (GetCustomerById(CustomerId) == null)
                return true;
            return false;
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return  _dbContext.Customers.ToList();
        }

        public Customer GetCustomerById(long CustomerId)
        {
            var result =  _dbContext.Customers
             .FirstOrDefault(c => c.CustomerId == CustomerId);
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
