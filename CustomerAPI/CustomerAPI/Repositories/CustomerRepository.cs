using CustomerAPI.Models;

namespace CustomerAPI.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        public Task<Customer> AddCustomer()
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteCustomer()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Customer>> GetAllCustomers()
        {
            throw new NotImplementedException();
        }

        public Task<Customer> GetCustomerById(long CustomerId)
        {
            throw new NotImplementedException();
        }

        public Task<Customer> UpdateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
