using CustomerAPI.Models;

namespace CustomerAPI.Repositories
{
    public interface ICustomerRepository
    {
        Task<Customer> AddCustomer(Customer customer);
        Task<Customer> UpdateCustomer(Customer customer);
        Task<Boolean> DeleteCustomerById(long CustomerId);
        Task<Customer> GetCustomerById(long CustomerId); 
        Task<IEnumerable<Customer>> GetAllCustomers();

    }
}
